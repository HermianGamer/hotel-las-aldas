import { defineField, defineType } from 'sanity';

const roomTypes = [
    { title: 'Suite', value: 'suite' },
    { title: 'Standard', value: 'standard' },
];

export default defineType({
    name: 'room',
    title: 'Bungalows',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: roomTypes,
            },
            initialValue: 'standard',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'capacity',
            title: 'Capacity',
            type: 'number',
            validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'imageInterior',
            title: 'Interior Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'thumbnails',
            title: 'Thumbnail Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1).max(5),
        }),

        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'name',
                            title: 'Feature Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
            name: 'amenities',
            title: 'Amenities',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'name',
                            title: 'Amenity Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),

        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: 'discount',
            title: 'Discount (%)',
            type: 'number',
            initialValue: 0,
            validation: (Rule) => Rule.min(0).max(100),
        }),

        defineField({
            name: 'isAvailable',
            title: 'Available for Booking',
            type: 'boolean',
            initialValue: true,
        }),
    ],
});