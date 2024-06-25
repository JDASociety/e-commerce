import Image from 'next/image'
import Link from 'next/link'
import { StarFilledIcon, WebIconLogo } from '@/ui/icons'
import { Product } from '../interfaces'
import { ButtonLikeProduct, ButtonAddProductToShoppingCart } from './'
import { Skeleton } from '@/ui/components'
import { cn } from '@/lib/utils'
import { formatCurrencyNumber } from '../helpers'

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
		<article className="group w-[300px] h-[500px]">
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
						className="w-full rounded-lg group-hover:hidden aspect-[4/5]"
						width={400}
						height={400}
					/>
					<Image
						src={images[1]}
						alt={`${name} imagen 2`}
						className="w-full rounded-lg hidden group-hover:block aspect-[4/5]"
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
					<span className="font-bold">{formatCurrencyNumber(price)}</span>
					{discount && (
						<>
							<span className="opacity-85 text line-through">
								{formatCurrencyNumber(price - (price * discount) / 100)}
							</span>
							<span className="font-bold">-{discount}% OFF</span>
						</>
					)}
				</footer>
			</Link>
		</article>
	)
}

export const CardProductSkeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props} className={cn('w-[300px] h-[500px]', className)}>
			<div className="w-full h-[375px] relative">
				<Skeleton className="rounded-lg w-full h-full" />
				<WebIconLogo className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20 size-16" />
			</div>

			<div className="h-[100px] pt-3">
				<div className="flex justify-between">
					<Skeleton className="w-2/3 h-5" />
					<Skeleton className="w-14 h-5" />
				</div>

				<Skeleton className="w-20 h-4 mt-2.5" />
				<Skeleton className="w-24 h-4 mt-1.5" />
				<Skeleton className="w-36 h-4 mt-1.5" />
			</div>
		</div>
	)
}
