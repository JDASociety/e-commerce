import { ProductListCarousel } from '@/product/components'
import React from 'react'

export const CategoryHighlightsList = () => {
	return (
		<section className="p-10">
			<ProductListCarousel
				href="#"
				listProducts={[
					{
						id: '1',
						name: 'Camiseta de algodón',
						images: [
							'https://ae01.alicdn.com/kf/S027d9e9c040c44dea9e279692b1dae08v.jpg_640x640Q90.jpg_.webp',
							'https://ae01.alicdn.com/kf/S221d0e341155410eb1b0810ce6b1a6fdR.jpg_640x640Q90.jpg_.webp',
						],
						price: 100,
						discount: 10,
						slug: 'camiseta-de-algodon',
						color: 'Blanco/Negro',
						rating: 4.5,
						clothingCut: 'Regular',
					},
					{
						id: '2',
						name: 'Camiseta de algodón',
						images: [
							'https://ae01.alicdn.com/kf/S90063a169c9449faabf4f3aa4a4cc496G.jpg_640x640Q90.jpg_.webp',
							'https://ae01.alicdn.com/kf/S221d0e341155410eb1b0810ce6b1a6fdR.jpg_640x640Q90.jpg_.webp',
						],
						isLiked: true,
						price: 100,
						slug: 'camiseta-de-algodon',
						color: 'Blanco',
						rating: 4.5,
						clothingCut: 'Regular',
					},
					{
						id: '3',
						name: 'Camiseta de algodón',
						images: [
							'https://ae01.alicdn.com/kf/S221d0e341155410eb1b0810ce6b1a6fdR.jpg_640x640Q90.jpg_.webp',
							'https://ae01.alicdn.com/kf/S027d9e9c040c44dea9e279692b1dae08v.jpg_640x640Q90.jpg_.webp',
						],
						price: 100,
						discount: 10,
						slug: 'camiseta-de-algodon',
						color: 'Blanco',
						rating: 4.5,
						clothingCut: 'Regular',
					},
					{
						id: '4',
						name: 'Camiseta de algodón',
						images: [
							'https://ae01.alicdn.com/kf/S221d0e341155410eb1b0810ce6b1a6fdR.jpg_640x640Q90.jpg_.webp',
							'https://ae01.alicdn.com/kf/S90063a169c9449faabf4f3aa4a4cc496G.jpg_640x640Q90.jpg_.webp',
						],
						price: 100,
						slug: 'camiseta-de-algodon',
						clothingCut: 'Regular',
						color: 'Blanco',
						rating: 4.5,
					},
				]}
				title="Lo mas Destacado"
			/>
		</section>
	)
}
