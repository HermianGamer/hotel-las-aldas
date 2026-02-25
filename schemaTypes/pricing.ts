import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'pricing',
    title: 'Precios',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            description: 'Ej: Temporada Alta Semana Santa 2025',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'type',
            title: 'Tipo de Precio',
            type: 'string',
            options: {
                list: [
                    { title: 'Días de semana', value: 'weekday' },
                    { title: 'Temporada especial', value: 'season' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        // Para tipo "weekday"
        defineField({
            name: 'weekdays',
            title: 'Días de la semana',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Lunes', value: '1' },
                    { title: 'Martes', value: '2' },
                    { title: 'Miércoles', value: '3' },
                    { title: 'Jueves', value: '4' },
                    { title: 'Viernes', value: '5' },
                    { title: 'Sábado', value: '6' },
                    { title: 'Domingo', value: '0' },
                ],
            },
            hidden: ({ document }) => document?.type !== 'weekday',
        }),

        // Para tipo "season"
        defineField({
            name: 'startDate',
            title: 'Fecha de inicio',
            type: 'date',
            hidden: ({ document }) => document?.type !== 'season',
        }),

        defineField({
            name: 'endDate',
            title: 'Fecha de fin',
            type: 'date',
            hidden: ({ document }) => document?.type !== 'season',
        }),

        defineField({
            name: 'priceMultiplier',
            title: 'Multiplicador de precio',
            type: 'number',
            description: 'Ej: 1.5 = 50% más caro, 0.8 = 20% descuento',
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: 'rooms',
            title: 'Aplicar a habitaciones',
            description: 'Dejar vacío para aplicar a todas',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'room' }] }],
        }),

        defineField({
            name: 'isActive',
            title: 'Activo',
            type: 'boolean',
            initialValue: true,
        }),
    ],

    preview: {
        select: {
            title: 'name',
            type: 'type',
            multiplier: 'priceMultiplier',
            active: 'isActive',
        },
        prepare({ title, multiplier, active }) {
            return {
                title,
                subtitle: `x${multiplier} · ${active ? 'Activo' : 'Inactivo'}`,
            };
        },
    },
});