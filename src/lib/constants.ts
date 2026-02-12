import DeluxeImage from '../assets/bungalow3.png'
import LuxuryImage from '../assets/bungalow2.png'

import InteriorImage from '../assets/cuarto_hotel.jpg'

export const rooms = [
  // luxury category
{
  name: 'Alessia',
  slug: 'alessia',
  category: 'suite',
  capacity: 2,
  image: LuxuryImage,
  image_interior: InteriorImage,
  thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'solar-panel', name: 'Panel Solar' },
    { icon: 'sofa', name: 'Sala' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 150,
  discount: 0,
},

{
  name: 'Campero I',
  slug: 'campero-i',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description: 'Indulge in the epitome of luxury with our Royal Room...',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Campero II',
  slug: 'campero-ii',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description: 'Indulge in the epitome of luxury with our Royal Room...',
  amenities: [{ icon: 'beef', name: 'Parrilla' }],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Campero III',
  slug: 'campero-iii',
  category: 'standard',
  capacity: 3,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description: 'Indulge in the epitome of luxury with our Royal Room...',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'solar-panel', name: 'Panel Solar' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Campero IV',
  slug: 'campero-iv',
  category: 'standard',
  capacity: 4,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description: 'Indulge in the epitome of luxury with our Royal Room...',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 2 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Campero V',
  slug: 'campero-v',
  category: 'suite',
  capacity: 5,
  image: LuxuryImage,
  image_interior: InteriorImage,
  thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
  description: 'Indulge in the epitome of luxury with our Royal Room...',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'solar-panel', name: 'Panel Solar' },
    { icon: 'sofa', name: 'Sala' },
    { icon: 'utensils', name: 'Comedor' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 3 },
    { icon: 'camera', name: 'Vista', value: 'Interior' },
  ],
  price: 150,
  discount: 0,
},
{
  name: 'Chico',
  slug: 'chico',
  category: 'standard',
  capacity: 3,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 2 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Gonzalo I',
  slug: 'gonzalo-i',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Gonzalo II',
  slug: 'gonzalo-ii',
  category: 'standard',
  capacity: 4,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 2 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'La Isla',
  slug: 'la-isla',
  category: 'suite',
  capacity: 4,
  image: LuxuryImage,
  image_interior: InteriorImage,
  thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'solar-panel', name: 'Panel Solar' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 2 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 150,
  discount: 0,
},

{
  name: 'Mellizo Chico',
  slug: 'mellizo-chico',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'solar-panel', name: 'Panel Solar' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Mellizo Grande',
  slug: 'mellizo-grande',
  category: 'standard',
  capacity: 7,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'sofa', name: 'Sala' },
    { icon: 'utensils', name: 'Comedor' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 3 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 5 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Palmeras',
  slug: 'palmeras',
  category: 'suite',
  capacity: 4,
  image: LuxuryImage,
  image_interior: InteriorImage,
  thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
    { icon: 'sofa', name: 'Sala' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 2 },
    { icon: 'camera', name: 'Vista', value: 'Interior' },
  ],
  price: 150,
  discount: 0,
},

{
  name: 'Palmeras Chico',
  slug: 'palmeras-chico',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [{ icon: 'beef', name: 'Parrilla' }],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 2 },
    { icon: 'camera', name: 'Vista', value: 'Interior' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Palomas',
  slug: 'palomas',
  category: 'standard',
  capacity: 3,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Arena' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Pavoreal',
  slug: 'pavoreal',
  category: 'standard',
  capacity: 2,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Interior' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Pocitas I',
  slug: 'pocitas-i',
  category: 'standard',
  capacity: 3,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},

{
  name: 'Pocitas II',
  slug: 'pocitas-ii',
  category: 'standard',
  capacity: 3,
  image: DeluxeImage,
  image_interior: InteriorImage,
  thumbnails: [DeluxeImage, DeluxeImage, DeluxeImage],
  description:
    'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
  amenities: [
    { icon: 'cooking-pot', name: 'Kitchenette' },
    { icon: 'beef', name: 'Parrilla' },
  ],
  features: [
    { icon: 'door-closed', name: 'Habitaciones', value: 1 },
    { icon: 'bed-double', name: 'Matrimonial', value: 1 },
    { icon: 'bed-single', name: 'Individual', value: 1 },
    { icon: 'camera', name: 'Vista', value: 'Peñas' },
  ],
  price: 120,
  discount: 0,
},
];