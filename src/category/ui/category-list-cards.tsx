import { CategoryCard } from '../components'

export const CategoryListCards = () => {
	const categories = [
		{
			name: 'Mejores Ventas',
			image:
				'https://ae01.alicdn.com/kf/S027d9e9c040c44dea9e279692b1dae08v.jpg_640x640Q90.jpg_.webp',
			href: '#',
		},
		{
			name: 'Temporada',
			image:
				'https://i.pinimg.com/736x/7c/93/45/7c9345a5cbeb1e09825bc4f8505b6b37.jpg',
			href: '#',
		},
		{
			name: 'Accesorios',
			image:
				'https://ae01.alicdn.com/kf/S221d0e341155410eb1b0810ce6b1a6fdR.jpg_640x640Q90.jpg_.webp',
			href: '#',
		},
		{
			name: 'Todos los Productos',
			image:
				'https://ae01.alicdn.com/kf/S90063a169c9449faabf4f3aa4a4cc496G.jpg_640x640Q90.jpg_.webp',
			href: '#',
		},
	]

	return (
		<section className="flex flex-wrap gap-5 border-y border-border px-4 py-12 justify-center">
			{categories.map((category, index) => (
				<CategoryCard key={index} {...category} />
			))}
		</section>
	)
}
