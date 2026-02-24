import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'complaint',
    title: 'Complaints',
    type: 'document',
    fields: [
        defineField({
            name: 'nombre',
            title: 'Nombre Completo',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Correo Electrónico',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'dni',
            title: 'DNI / CE',
            type: 'string',
        }),
        defineField({
            name: 'domicilio',
            title: 'Domicilio',
            type: 'string',
        }),
        defineField({
            name: 'telefono',
            title: 'Teléfono',
            type: 'string',
        }),
        defineField({
            name: 'tipoBien',
            title: 'Tipo de Bien',
            type: 'string',
            options: {
                list: [
                    { title: 'Producto', value: 'producto' },
                    { title: 'Servicio', value: 'servicio' },
                ],
            },
        }),
        defineField({
            name: 'montoReclamado',
            title: 'Monto Reclamado',
            type: 'string',
        }),
        defineField({
            name: 'descripcion',
            title: 'Descripción del Bien',
            type: 'string',
        }),
        defineField({
            name: 'tipoReclamo',
            title: 'Tipo de Reclamo',
            type: 'string',
            options: {
                list: [
                    { title: 'Reclamo', value: 'reclamo' },
                    { title: 'Queja', value: 'queja' },
                ],
            },
        }),
        defineField({
            name: 'detalle',
            title: 'Detalle de la Reclamación',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pedido',
            title: 'Pedido del Consumidor',
            type: 'text',
        }),
        defineField({
            name: 'createdAt',
            title: 'Fecha de Envío',
            type: 'datetime',
            readOnly: true,
        }),
    ],
});