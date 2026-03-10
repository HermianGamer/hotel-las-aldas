import type { APIRoute } from 'astro';
import { SANITY_TOKEN } from 'astro:env/server';
import { SANITY_PROJECT_ID, SANITY_DATASET } from 'astro:env/client';
import {sanityClient} from 'sanity:client';
import { toast } from 'sonner';

export const POST: APIRoute = async ({ request, locals }) => {
  const { userId } = locals.auth();

  if (!userId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { reservationId } = await request.json();

    if (!reservationId) {
      return new Response(JSON.stringify({ message: 'Reservation ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const booking = await sanityClient.fetch(
      `*[_type == "booking" && reservationId == $reservationId && user._ref == $userId][0]._id`,
      { reservationId, userId }
    );

    if (!booking) {
      return new Response(JSON.stringify({ message: 'Reserva no encontrada.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const mutations = {
      mutations: [
        {
          patch: {
            id: booking,
            set: { status: 'cancelled' },
          },
        },
      ],
    };

    const sanityResponse = await fetch(
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

    const result = await sanityResponse.json(); // ✅ solo una vez

    if (!sanityResponse.ok) {
      throw new Error(result.error?.description || 'Failed to cancel booking');
    }

    toast.success('¡Reserva cancelada exitosamente.');
    return new Response(JSON.stringify({ message: 'Reserva cancelada.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }, // ✅ header añadido
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ message: 'Error del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } } // ✅ 500 es más correcto que 400
    );
  }
};