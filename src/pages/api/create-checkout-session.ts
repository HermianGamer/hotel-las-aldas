import type { APIRoute } from 'astro';
import { CULQI_SECRET_KEY, SANITY_TOKEN } from 'astro:env/server';
import { SANITY_PROJECT_ID, SANITY_DATASET } from 'astro:env/client';

async function mutateSanity(mutations: any) {
    const response = await fetch(
        `https://${SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/data/mutate/${SANITY_DATASET}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${SANITY_TOKEN}`,
            },
            body: JSON.stringify(mutations),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Sanity error: ${JSON.stringify(error)}`);
    }
    return response.json();
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const {
            token,
            amount,
            email,
            // datos del booking
            reservationId,
            userId,
            roomId,
            checkIn,
            checkOut,
            adults,
            children,
            totalPrice,
        } = body;

        // 1. Cobrar con Culqi
        const culqiResponse = await fetch('https://api.culqi.com/v2/charges', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${CULQI_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount,          // en centimos, ej: 15000 = S/150.00
                currency_code: 'PEN',
                email,
                source_id: token,
            }),
        });

        const culqiData = await culqiResponse.json();

        if (!culqiResponse.ok) {
            return new Response(
                JSON.stringify({ success: false, message: culqiData.user_message || 'Error al procesar el pago' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // 2. Pago exitoso → crear booking en Sanity
        await mutateSanity({
            mutations: [
                {
                    create: {
                        _type: 'booking',
                        reservationId,
                        user: { _type: 'reference', _ref: userId },
                        room: { _type: 'reference', _ref: roomId },
                        checkIn,
                        checkOut,
                        adults,
                        children,
                        totalPrice,
                        status: 'confirmed',
                        paymentStatus: 'paid',
                        paymentId: culqiData.id,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        });

        return new Response(
            JSON.stringify({ success: true, paymentId: culqiData.id }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error en el procesamiento del pago:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Error del servidor' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};