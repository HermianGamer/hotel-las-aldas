import type { APIRoute } from 'astro';
import { sanityClient } from 'sanity:client';
import { SITE_URL } from '@/lib/seo';

export const prerender = false;

const STATIC_ROUTES: { path: string; changefreq: string; priority: string }[] = [
	{ path: '/', changefreq: 'daily', priority: '1.0' },
	{ path: '/all', changefreq: 'weekly', priority: '0.9' },
	{ path: '/suites', changefreq: 'weekly', priority: '0.8' },
	{ path: '/standard', changefreq: 'weekly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.7' },
	{ path: '/experiences/aldas', changefreq: 'monthly', priority: '0.7' },
	{ path: '/experiences/chankillo', changefreq: 'monthly', priority: '0.7' },
	{ path: '/experiences/huaro', changefreq: 'monthly', priority: '0.7' },
	{ path: '/experiences/matrimonio', changefreq: 'monthly', priority: '0.6' },
	{ path: '/policies', changefreq: 'yearly', priority: '0.3' },
	{ path: '/terms', changefreq: 'yearly', priority: '0.3' },
	{ path: '/complaint', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = async () => {
	const rooms = await sanityClient.fetch<{ slug: string; _updatedAt: string }[]>(
		`*[_type == "room" && isAvailable && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
	);

	const urls = [
		...STATIC_ROUTES.map(
			(route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
		),
		...rooms.map(
			(room) => `  <url>
    <loc>${SITE_URL}/room/${room.slug}</loc>
    <lastmod>${new Date(room._updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
		),
	].join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
