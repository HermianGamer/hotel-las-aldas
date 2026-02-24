import type { APIRoute } from 'astro';
import { SANITY_TOKEN } from 'astro:env/server';
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
            nombre,
            email,
            dni,
            domicilio,
            telefono,
            tipoBien,
            montoReclamado,
            descripcion,
            tipoReclamo,
            detalle,
            pedido,
        } = body;

        if (!nombre || !email || !detalle) {
            return new Response(
                JSON.stringify({ success: false, message: 'Faltan campos obligatorios' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        await mutateSanity({
            mutations: [
                {
                    create: {
                        _type: 'complaint',
                        nombre,
                        email,
                        dni: dni || '',
                        domicilio: domicilio || '',
                        telefono: telefono || '',
                        tipoBien: tipoBien || '',
                        montoReclamado: montoReclamado || '',
                        descripcion: descripcion || '',
                        tipoReclamo: tipoReclamo || '',
                        detalle,
                        pedido: pedido || '',
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        });

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error enviando reclamación:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Error del servidor' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};