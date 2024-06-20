import { products } from '@/mock'
import { ProductListCarousel } from '../components'

export const ListNewProducts = () => {
	return (
		<section className="p-10">
			<ProductListCarousel
				href="#"
				listProducts={products}
				title="Nuevos Productos"
			/>
		</section>
	)
}
