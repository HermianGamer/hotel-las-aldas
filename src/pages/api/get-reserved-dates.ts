import type { APIRoute } from 'astro';
import { sanityClient } from 'sanity:client';

export const GET: APIRoute = async ({ url }) => {
    const roomSlug = url.searchParams.get('roomSlug');

    const roomData = await sanityClient.fetch(
        `*[_type == "room" && slug == $roomSlug][0]{ _id }`,
        { roomSlug }
    );

    if (!roomData?._id) {
        return new Response(JSON.stringify({ dates: [] }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const bookings = await sanityClient.fetch(
        `*[_type == "booking" && room._ref == $roomId && status in ["pending", "confirmed", "checked-in"]]{ checkIn, checkOut }`,
        { roomId: roomData._id }
    );

    const dates: string[] = [];
    for (const booking of bookings) {
        const current = new Date(booking.checkIn + 'T00:00:00');
        const end = new Date(booking.checkOut + 'T00:00:00');
        while (current < end) {
            dates.push(current.toISOString().split('T')[0]);
            current.setDate(current.getDate() + 1);
        }
    }

    return new Response(JSON.stringify({ dates }), {
        headers: { 'Content-Type': 'application/json' }
    });
};