import type { APIRoute } from 'astro';
import { sanityClient } from 'sanity:client';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { roomSlug, checkIn, checkOut } = await request.json();

        if (!roomSlug) {
            return new Response(
                JSON.stringify({ error: 'roomSlug is required' }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Obtén el _id real desde Sanity usando el slug
        const roomData = await sanityClient.fetch(
            `*[_type == "room" && slug.current == $roomSlug][0]{ _id }`,
            { roomSlug }
        );

        if (!roomData?._id) {
            return new Response(
                JSON.stringify({ error: 'Room not found' }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Sanity tipo "date" usa YYYY-MM-DD
        const checkInDate = checkIn.split('T')[0];
        const checkOutDate = checkOut.split('T')[0];

        const query = `*[_type == "booking" && room._ref == $roomId && status in ["pending", "confirmed", "checked-in"] && checkIn <= $checkOutDate && checkOut >= $checkInDate]`;

        const overlappingBookings = await sanityClient.fetch(query, {
            roomId: roomData._id,
            checkInDate,
            checkOutDate,
        });

        const isAvailable = overlappingBookings.length === 0;

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