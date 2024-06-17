import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '../interfaces'

interface Props {
	product: Product
}

export const ProductOfferCard = ({ product }: Props) => {
	const { name, images, price, discount, clothingCut, color, slug } = product

	return (
		<article className="flex gap-5">
			<Link href={`/product/${slug}`} className="h-min">
				<Image
					src={images[0]}
					alt={`Imagen del producto ${name}`}
					className="h-28 w-20 object-cover rounded-lg group-hover:hidden"
					width={100}
					height={100}
				/>
			</Link>
			<div className="flex flex-col">
				<div className="flex gap-2">
					{discount && (
						<span className="font-bold tracking-wide text-xs bg-primary rounded-md p-1 px-2 text-primary-foreground">
							OFERTA
						</span>
					)}
				</div>
				<h3 className="text-lg font-semibold text-balance">{name}</h3>
				<span>{clothingCut}</span>
				<span>{color}</span>
				<div className="flex gap-2">
					<span className="font-bold">${price}</span>
					{discount && (
						<>
							<span className="opacity-85 text line-through">
								${price - (price * discount) / 100}
							</span>
							<span className="font-bold">-{discount}% OFF</span>
						</>
					)}
				</div>
			</div>
		</article>
	)
}
