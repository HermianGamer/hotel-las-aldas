export const SITE_URL = 'https://lasaldas.com';
export const SITE_NAME = 'Hotel Las Aldas';

export const DEFAULT_DESCRIPTION =
	'Hotel Las Aldas, hotel frente al mar en Casma, Áncash, Perú. Bungalows frente a la playa, gastronomía local y acceso directo a las mejores playas y destinos turísticos de Áncash.';

export const BUSINESS = {
	legalName: 'Hotel Las Aldas E.I.R.L.',
	ruc: '20609790564',
	phone: '+51923381810',
	whatsapp: 'https://wa.me/51923381810',
	streetAddress: 'Km. 347 Panamericana Norte, Caleta La Gramita',
	addressLocality: 'Casma',
	addressRegion: 'Áncash',
	postalCode: '',
	addressCountry: 'PE',
	latitude: -9.7113605,
	longitude: -78.2944997,
	googleMapsUrl: 'https://maps.app.goo.gl/qD5mpfQqtWZSL2Kq5',
};

export const SOCIAL_LINKS = [
	'https://www.instagram.com/hotel_las_aldas/',
	'https://www.facebook.com/HotelLasAldas/',
	'https://x.com/HotelLasAldas',
	'https://www.tiktok.com/@hotel_las_aldas',
];

export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/LOGOTIPO_COLOR_1.png`;

export function buildHotelSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Hotel',
		'@id': `${SITE_URL}/#hotel`,
		name: SITE_NAME,
		legalName: BUSINESS.legalName,
		description: DEFAULT_DESCRIPTION,
		url: `${SITE_URL}/`,
		telephone: BUSINESS.phone,
		priceRange: '$$',
		image: [DEFAULT_OG_IMAGE],
		logo: DEFAULT_OG_IMAGE,
		address: {
			'@type': 'PostalAddress',
			streetAddress: BUSINESS.streetAddress,
			addressLocality: BUSINESS.addressLocality,
			addressRegion: BUSINESS.addressRegion,
			addressCountry: BUSINESS.addressCountry,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: BUSINESS.latitude,
			longitude: BUSINESS.longitude,
		},
		hasMap: BUSINESS.googleMapsUrl,
		sameAs: SOCIAL_LINKS,
		areaServed: {
			'@type': 'AdministrativeArea',
			name: 'Áncash, Perú',
		},
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Frente al mar', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Bungalows independientes', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Kitchenette', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Parrilla', value: true },
		],
	};
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: `${SITE_URL}${item.path}`,
		})),
	};
}

export function buildHotelRoomSchema(room: {
	name: string;
	slug: string;
	description?: string;
	capacity?: number;
	price?: number;
	image?: string;
	amenities?: { name: string }[];
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'HotelRoom',
		name: room.name,
		description: room.description,
		url: `${SITE_URL}/room/${room.slug}`,
		occupancy: room.capacity
			? { '@type': 'QuantitativeValue', maxValue: room.capacity }
			: undefined,
		image: room.image ? [room.image] : undefined,
		amenityFeature: room.amenities?.map((amenity) => ({
			'@type': 'LocationFeatureSpecification',
			name: amenity.name,
			value: true,
		})),
		...(room.price
			? {
					offers: {
						'@type': 'Offer',
						price: room.price,
						priceCurrency: 'PEN',
						availability: 'https://schema.org/InStock',
						url: `${SITE_URL}/room/${room.slug}`,
					},
				}
			: {}),
		containedInPlace: { '@id': `${SITE_URL}/#hotel` },
	};
}
