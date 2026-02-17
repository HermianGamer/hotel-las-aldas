import { verifyWebhook } from '@clerk/astro/webhooks'
import type { APIRoute } from 'astro'
import { SIGNING_SECRET, SANITY_TOKEN } from 'astro:env/server'
import { SANITY_PROJECT_ID, SANITY_DATASET } from 'astro:env/client'

async function mutateSanity(mutations:any){
    if(!SANITY_TOKEN || !SANITY_DATASET || !SANITY_PROJECT_ID){
        throw new Error ('Missing Sanity config')
    }

    const response = await fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/data/mutate/${SANITY_DATASET}`
, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SANITY_TOKEN}`,
        },
        body: JSON.stringify(mutations),
    });

    if(!response.ok){
        const error= await response.json();
        throw new Error(`Sanity api error: ${JSON.stringify(error)}`);
    }
    return response.json();
}

export const POST: APIRoute = async ({ request }) => {
    try {
        console.log('Headers recibidos:', Object.fromEntries(request.headers.entries()))
        console.log('SIGNING_SECRET existe:', !!SIGNING_SECRET)
        
        const evt = await verifyWebhook(request, {
            signingSecret: SIGNING_SECRET,
        });

        switch (evt.type) {
            case 'user.created':
            case 'user.updated':
                const { id, first_name, last_name, email_addresses, image_url } = evt.data;

                // Validar que existe email
                if (!email_addresses || email_addresses.length === 0) {
                    console.log('No email addresses found for user:', id);
                    return new Response('User has no email', { status: 200 });
                }

                const mutations = {
                    mutations: [
                        {
                            createOrReplace: {
                                _type: 'user',
                                _id: id,
                                userId: id,
                                name: `${first_name || ''} ${last_name || ''}`.trim(),
                                email: email_addresses[0].email_address,
                                image: image_url,
                                createdAt: new Date().toISOString(),
                            },
                        },
                    ],
                };

                const result = await mutateSanity(mutations);
                return new Response(JSON.stringify(result), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });

            default:
                return new Response(`Webhook event type: ${evt.type}`, { status: 200 });
        }

    } catch (err) {
        console.error('Error verifying webhook:', err)
        console.error('SIGNING_SECRET existe:', !!SIGNING_SECRET)
        return new Response('Error verifying webhook', { status: 400 })
    }
}
