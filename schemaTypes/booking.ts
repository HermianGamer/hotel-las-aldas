import { defineField, defineType } from 'sanity';

const roomTypes = [
    { title: 'Suite', value: 'suite' },
    { title: 'Standard', value: 'standard' },
];

export default defineType({
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
        defineField({
            name: 'reservationId',
            title: 'Reservation ID',
            type: 'string',
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{type: "user"}],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'room',
            title: 'Room',
            type: 'reference',
            to: [{type: "room"}],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'checkIn',
            title: 'Check-in Date',
            type: 'date',
            readOnly: true,
        }),

        defineField({
            name: 'checkOut',
            title: 'Check-out Date',
            type: 'date',
            readOnly: true,
        }),

        defineField({
            name: 'adults',
            title: 'Adults',
            type: 'number',
            readOnly: true,
        }),

        defineField({
            name: 'children',
            title: 'Children',
            type: 'number',
            readOnly: true,
        }),

        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            readOnly: true,
        }),

        defineField({
            name: 'status',
            title: 'Booking Status',
            type: 'string',
            options: {
                list: [
                { title:"Pendiente", value: "pending" },
                { title:"Confirmado", value: "confirmed" },
                { title:"Checked In", value: "checked-in" },
                { title:"Checked Out", value: "checked-out" },
                { title:"Anulado", value: "cancelled" },
            ]},
            initialValue: "pending",
        }),

        defineField({
            name: 'paymentStatus',
            title: 'Payment Status',
            type: 'string',
            options: {
                list: [
                { title:"Pendiente", value: "pending" },
                { title:"Pagado", value: "paid" },
                { title:"Rechazado", value: "failed" },
            ]},
            initialValue: "pending",
        }),

        defineField({
            name: 'paymentId',
            title: 'Payment ID',
            type: 'string',
        }),

        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            readOnly: true,
        }),
    ],
});