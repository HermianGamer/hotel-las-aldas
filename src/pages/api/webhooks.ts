import { verifyWebhook } from '@clerk/astro/webhooks'
import type { APIRoute } from 'astro'
import { SIGNING_SECRET, SANITY_TOKEN } from 'astro:env/server'
import { SANITY_PROJECT_ID, SANITY_DATASET } from 'astro:env/client'
import type { Switch } from 'radix-ui'

async function mutateSanity(mutatuins:any){
    if(!SANITY_TOKEN || !SANITY_DATASET || !SANITY_PROJECT_ID){
        throw new Error ('Missing Sanity config')
    }

    const response = await fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/daeta/mutate/${SANITY_DATASET}`, {
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
    const evt = await verifyWebhook(request, {
      signingSecret: SIGNING_SECRET,
    });

    // Do something with payload
    switch(evt.type){
        case 'user.created':
        case 'user.updated':
            const {id, first_name, last_name, email_addresses, image_url} = evt.data;

        const mutations = {
            mutations:[
                {
                    createOrReplace:{
                        _type: 'user',
                        _id: id,
                        userId: id,
                        name: `${first_name} ${last_name}`,
                        email: email_addresses[0].email_address,
                        image: image_url,
                        createdAt: new Date().toISOString(),
                    },
                },
            ],
        };

        const result = await mutateSanity(mutations);
        return new Response(JSON.stringify(result), { status: 200 }, header: {'Content-Type': 'application/json'});

    }


  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}