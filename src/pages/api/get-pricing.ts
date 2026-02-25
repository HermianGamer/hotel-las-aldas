import type { APIRoute } from 'astro';
import { sanityClient } from 'sanity:client';

export const GET: APIRoute = async () => {
    try {
        const rules = await sanityClient.fetch(
            `*[_type == "pricing" && isActive == true]{
                _id,
                name,
                type,
                weekdays,
                startDate,
                endDate,
                priceMultiplier,
                rooms[]{ _ref },
                isActive
            }`
        );

        return new Response(
            JSON.stringify({ rules }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error fetching pricing rules:', error);
        return new Response(
            JSON.stringify({ rules: [] }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};