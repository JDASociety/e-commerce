import Image from 'next/image'
import Link from 'next/link'
import { StarFilledIcon } from '@/ui/icons'
import { Product } from '../interfaces'
import { ButtonLikeProduct, ButtonAddProductToShoppingCart } from './'

interface Props {
	product: Product
}

export const CardProduct = ({ product }: Props) => {
	const {
		id,
		name,
		images,
		price,
		discount,
		clothingCut,
		color,
		rating,
		slug,
		isLiked,
	} = product

	return (
		<article className="group">
			<div className="relative w-full">
				{discount && (
					<span className="absolute bottom-2 left-2 font-bold tracking-wide my-0 text-xs bg-primary rounded-md p-1 px-2 text-primary-foreground">
						OFERTA
					</span>
				)}
				<ButtonLikeProduct
					productId={id}
					isLiked={!!isLiked}
					className="absolute top-2 right-2 bg-primary/60"
				/>
				<ButtonAddProductToShoppingCart product={product} />
				<Link href={`/product/${slug}`}>
					<Image
						src={images[0]}
						alt={`${name} imagen 1`}
						className="w-full rounded-lg group-hover:hidden"
						width={400}
						height={400}
					/>{' '}
					<Image
						src={images[1]}
						alt={`${name} imagen 2`}
						className="w-full rounded-lg hidden group-hover:block"
						width={400}
						height={400}
					/>
				</Link>
			</div>
			<Link href={`/product/${slug}`}>
				<header className="flex justify-between mt-2">
					<h4 className="text-lg font-semibold text-balance">{name}</h4>
					<span className="flex font-bold items-center gap-1">
						<StarFilledIcon className="size-4" />
						{rating}
					</span>
				</header>
				<div className="flex flex-col">
					<span>{clothingCut}</span>
					<span>{color}</span>
				</div>
				<footer className="flex items-center gap-2">
					<span className="font-bold">${price}</span>
					{discount && (
						<>
							<span className="opacity-85 text line-through">
								${price - (price * discount) / 100}
							</span>
							<span className="font-bold">-{discount}% OFF</span>
						</>
					)}
				</footer>
			</Link>
		</article>
	)
}
