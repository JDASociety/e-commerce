export const formatCurrencyNumber = (number: number) => {
	return number.toLocaleString('es-MX', {
		style: 'currency',
		currency: 'MXN',
	})
}
