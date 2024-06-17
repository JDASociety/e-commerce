import { CategoryListCards } from '@/category/ui'
import { ListNewProducts } from '@/product/ui'
import {
	CategoryHighlightsList,
	NewsletterSubscriptionSection,
	PosterPromotion,
	PresentationHeroCarousel,
} from '@/ui/components'
import { ClientProofTestimonials } from '@/ui/components'

export default function Home() {
	return (
		<>
			<PresentationHeroCarousel />
			<CategoryListCards />
			<ListNewProducts />
			<section className="px-10 py-12">
				<PosterPromotion
					title="Promo box"
					description="descuento en productos seleccionados"
					percentage={50}
					pallete="white"
					imageUrl="https://ih1.redbubble.net/image.5268892653.0517/fposter,small,wall_texture,square_product,600x600.jpg"
					redirection={{
						url: '#',
						urlDescription: 'Ver productos',
					}}
				/>
			</section>
			<CategoryHighlightsList />
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 py-12 flex-wrap">
				<PosterPromotion
					title="Playeras"
					pallete="black"
					imageUrl="https://www.shutterstock.com/image-vector/modern-color-geometric-banner-design-260nw-1800332644.jpg"
					description="descuento en playeras seleccionadas"
					percentage={20}
				/>
				<PosterPromotion
					title="Accesorios"
					description="descuento en todos los accesorios"
					pallete="black"
					imageUrl="https://i.etsystatic.com/49086137/r/il/22b4c0/5629385866/il_fullxfull.5629385866_m1fq.jpg"
					percentage={10}
					redirection={{
						url: '#',
						urlDescription: 'Comprar ahora',
					}}
				/>
			</section>
			<NewsletterSubscriptionSection />
			<ClientProofTestimonials />
		</>
	)
}
