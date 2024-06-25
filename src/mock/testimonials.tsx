import { TextHighlight } from '@/ui/components'

const generateRandomDate = () => {
	const start = new Date()
	start.setFullYear(start.getFullYear() - 1)
	const end = new Date()
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	)
	return date.toDateString()
}

export const testimonials = () => [
	{
		name: 'El Q',
		createdAt: generateRandomDate(),
		description: (
			<p>
				¡Este producto es increíble! La calidad es sobresaliente y lo recomiendo
				encarecidamente.
				<TextHighlight>¡La mejor compra de todas!</TextHighlight>
			</p>
		),
	},
	{
		name: 'Tr del Mal',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Estoy muy satisfecho con este producto. Ha superado mis expectativas.
				<TextHighlight>Excelente rendimiento y valor.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Malevolo Tr',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Este es un producto fantástico con grandes características.
				<TextHighlight>Muy recomendable para todos.</TextHighlight>
			</p>
		),
	},
	{
		name: 'JonyBravo',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Un producto maravilloso que ofrece gran valor por su precio.
				<TextHighlight>Calidad y usabilidad de primera.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Kectzo',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Estoy impresionado con la durabilidad y el diseño de este producto.
				<TextHighlight>Vale cada centavo.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Pacho',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Este producto realmente ha mejorado mi vida diaria.
				<TextHighlight>Calidad y características excepcionales.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Don Palazuelos',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Un producto confiable y de alta calidad.
				<TextHighlight>También excelente servicio al cliente.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Carlitos 10',
		createdAt: generateRandomDate(),
		description: (
			<p>
				¡Me encanta este producto! Está muy bien hecho y su rendimiento es
				excelente.
				<TextHighlight>Altamente recomendado.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Miguelito',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Este producto ha superado mis expectativas en todos los aspectos.
				<TextHighlight>Calidad y valor fantásticos.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Abraham q',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Un producto sobresaliente, tanto confiable como duradero.
				<TextHighlight>Rendimiento excepcional.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Chalox X',
		createdAt: generateRandomDate(),
		description: (
			<p>
				No podría estar más feliz con este producto.
				<TextHighlight>Gran calidad y características.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Bravo de los Bravos',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Un producto fantástico que cumple con lo prometido.
				<TextHighlight>Muy recomendable para todos.</TextHighlight>
			</p>
		),
	},
	{
		name: 'Omar Farooq',
		createdAt: generateRandomDate(),
		description: (
			<p>
				Un producto de alta calidad que ofrece excelentes resultados.
				<TextHighlight>Definitivamente lo volvería a comprar.</TextHighlight>
			</p>
		),
	},
]
