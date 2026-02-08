import type { ImageMetadata } from 'astro';

export interface Amenity {
  icon: string;
  name: string;
}

export interface Feature {
  icon: string;
  name: string;
  value: number | string;
}

export type RoomCategory = 'suite' | 'standard';
export type RoomView = 'Arena' | 'Peñas' | 'Interior';

export interface Room {
  name: string;
  slug: string;
  category: RoomCategory;
  capacity: number;
  image: ImageMetadata;
  thumbnails: ImageMetadata[];
  description: string;
  amenities: Amenity[];
  features: Feature[];
  price: number;
  discount: number;
}
