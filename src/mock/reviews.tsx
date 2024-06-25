const generateRandomDate = () => {
	const start = new Date()
	start.setFullYear(start.getFullYear() - 1)
	const end = new Date()
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	)
	return date.toDateString()
}

export const reviews = [
	{
		id: '1',
		name: 'El Q',
		createdAt: generateRandomDate(),
		description:
			'¡Este producto es increíble! La calidad es sobresaliente y lo recomiendo encarecidamente. ¡La mejor compra de todas!',
	},
	{
		id: '2',
		name: 'Tr del Mal',
		createdAt: generateRandomDate(),
		description:
			'Estoy muy satisfecho con este producto. Ha superado mis expectativas. Excelente rendimiento y valor.',
	},
	{
		id: '3',
		name: 'Malevolo Tr',
		createdAt: generateRandomDate(),
		description:
			'Este es un producto fantástico con grandes características. Muy recomendable para todos.',
	},
	{
		id: '4',
		name: 'JonyBravo',
		createdAt: generateRandomDate(),
		description:
			'Un producto maravilloso que ofrece gran valor por su precio. Calidad y usabilidad de primera.',
	},
	{
		id: '5',
		name: 'Kectzo',
		createdAt: generateRandomDate(),
		description:
			'Estoy impresionado con la durabilidad y el diseño de este producto. Vale cada centavo.',
	},
	{
		id: '6',
		name: 'Pacho',
		createdAt: generateRandomDate(),
		description:
			'Este producto realmente ha mejorado mi vida diaria. Calidad y características excepcionales.',
	},
	{
		id: '7',
		name: 'Don Palazuelos',
		createdAt: generateRandomDate(),
		description:
			'Un producto confiable y de alta calidad.También excelente servicio al cliente.',
	},
	{
		id: '8',
		name: 'Carlitos 10',
		createdAt: generateRandomDate(),
		description:
			'¡Me encanta este producto! Está muy bien hecho y su rendimiento es excelente. Altamente recomendado',
	},
	{
		id: '9',
		name: 'Miguelito',
		createdAt: generateRandomDate(),
		description:
			'Este producto ha superado mis expectativas en todos los aspectos. Calidad y valor fantásticos.',
	},
	{
		id: '10',
		name: 'Abraham q',
		createdAt: generateRandomDate(),
		description:
			'Un producto sobresaliente, tanto confiable como duradero. Rendimiento excepcional.',
	},
	{
		id: '11',
		name: 'Chalox X',
		createdAt: generateRandomDate(),
		description:
			'No podría estar más feliz con este producto. Gran calidad y características.',
	},
	{
		id: '12',
		name: 'Bravo de los Bravos',
		createdAt: generateRandomDate(),
		description:
			'Un producto fantástico que cumple con lo prometido. Muy recomendable para todos.',
	},
	{
		id: '13',
		name: 'Omar Farooq',
		createdAt: generateRandomDate(),
		description:
			'Un producto de alta calidad que ofrece excelentes resultados.Definitivamente lo volvería a comprar',
	},
]
