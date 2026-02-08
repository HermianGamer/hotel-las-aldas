export const formatPrice = (amount: number) => {
    return amount.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};