import { Marquee, TestimonialCard, TextHighlight } from '.'

const generateRandomDate = () => {
	const start = new Date()
	start.setFullYear(start.getFullYear() - 1)
	const end = new Date()
	const date = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	)
	return date.toDateString()
}

export const ClientProofTestimonials = () => {
	const testimonials = [
		{
			name: 'El Q',
			createdAt: generateRandomDate(),
			description: (
				<p>
					¡Este producto es increíble! La calidad es sobresaliente y lo
					recomiendo encarecidamente.
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
					<TextHighlight>
						Calidad y características excepcionales.
					</TextHighlight>
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

	return (
		<section id="testimonials" className="py-16">
			<div className="mx-auto md:container md:px-8">
				<header className="flex flex-col items-center">
					<h3 className="text-center text-2xl font-bold">
						Nuestra Calificación
					</h3>
					<p>
						Basada en <span className="underline">2303 calificaciones</span>
					</p>
				</header>
				<div className="relative mx-auto mt-6 max-w-[100vw] overflow-hidden">
					<div className="flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto py-14[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
						<Marquee pauseOnHover className="[--duration:60s]">
							<div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
							{testimonials.map((card, idx) => (
								<TestimonialCard {...card} key={idx} />
							))}
						</Marquee>
					</div>
					<div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/5 bg-gradient-to-r from-background md:block"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/5 bg-gradient-to-l from-background md:block"></div>
				</div>
			</div>
		</section>
	)
}
