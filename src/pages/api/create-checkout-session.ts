import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {

        return new Response(
            JSON.stringify({ available: isAvailable }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error('Availability check error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to check availability' }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};

// https://www.youtube.com/watch?v=Ns5ZekXBfTI&list=PL_XplE-f9UPIo3BiRbx-LJHQV0Ek2hLA2&index=18 42:30