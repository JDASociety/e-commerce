import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
	ButtonLikeProduct,
	PreviewProductImages,
	ProductInformationAccordion,
	ProductListCarousel,
} from '@/product/components'
import { formatCurrencyNumber, getProductDetails } from '@/product/helpers'
import { buttonVariants, PosterPromotion } from '@/ui/components'
import { ArrowLeftIcon, CheckIcon } from '@/ui/icons'
import { RatingStars } from '@/reviews/components'
import { FormAddToCartShopping } from './ui/form-add-to-cart-shopping'
import { products } from '@/mock'

export default async function ProductDetailsPage({
	params,
}: {
	params: { slug: string }
}) {
	const product = await getProductDetails(params.slug)

	if (!product.ok) {
		redirect('/')
	}

	const {
		brand,
		clothingCut,
		color,
		description,
		discount,
		id,
		images,
		isLiked,
		name,
		price,
		rating,
		slug,
		stock,
		totalReviews,
		details,
		reviews,
	} = product.product

	return (
		<section className="px-10 py-6">
			<div>
				<Link
					href="/"
					className={buttonVariants({
						variant: 'link',
						className: 'gap-1 block font-semibold w-min pl-0',
					})}>
					<ArrowLeftIcon className="size-5" />
					Volver al Inicio
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<PreviewProductImages />
				<div className="md:row-span-2 relative">
					<div className="sticky top-0 left-0">
						<div className="flex justify-between">
							<h1 className="font-semibold text-balance text-2xl">{name}</h1>
							<ButtonLikeProduct productId={id} isLiked={!!isLiked} />
						</div>
						<p className="max-w-[65ch] h-[72px] overflow-hidden text-ellipsis">
							{description}
						</p>
						<div className="mt-4">
							<div className="flex gap-2 items-end">
								<span className="text-3xl font-semibold">
									{formatCurrencyNumber(price)}
								</span>

								{discount && (
									<>
										<span className="opacity-85 text line-through">
											{formatCurrencyNumber(price - (price * discount) / 100)}
										</span>
										<span className="font-bold">-{discount}% OFF</span>
									</>
								)}
							</div>
							<span className="text-sm">IVA incluido</span>
						</div>
						<Link
							href="#product-reviews"
							className={buttonVariants({
								variant: 'link',
								className: 'gap-1 items-center pl-0',
							})}>
							<RatingStars rating={rating} />
							<span className="ml-2">({totalReviews})</span>
						</Link>
						<FormAddToCartShopping />
						<div className="flex justify-between text-sm mt-4">
							<span className="font-medium flex gap-2 items-center">
								<span className="relative flex size-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
									<span className="relative inline-flex rounded-full size-3 bg-primary/35"></span>
								</span>
								Disponible
							</span>
							<span className="opacity-70">Envío en 5-7 días hábiles</span>
						</div>
						<div className="mt-10">
							<p className="max-w-[65ch]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique corporis perspiciatis culpa commodi quae laboriosam
								esse magni
							</p>
							<ul className="mt-5">
								<li className="mt-2 flex gap-3 items-center">
									<CheckIcon className="size-5 stroke-2" />
									Lorem ipsum dolor sit amet.
								</li>
								<li className="mt-2 flex gap-3 items-center">
									<CheckIcon className="size-5 stroke-2" />
									magni corrupti quibusdam nemo.
								</li>
								<li className="mt-2 flex gap-3 items-center">
									<CheckIcon className="size-5 stroke-2" />
									consectetur adipisicing elit.
								</li>

								<li className="mt-2 flex gap-3 items-center">
									<CheckIcon className="size-5 stroke-2" />
									rem qui enim architecto harum provident
								</li>
							</ul>
						</div>
					</div>
				</div>
				<ProductInformationAccordion
					detailsProduct={details}
					rating={rating}
					reviews={reviews}
					totalReviews={totalReviews}
				/>
			</div>
			<div className="mt-10">
				<ProductListCarousel
					listProducts={products}
					title="Productos Relacionados"
				/>
			</div>
			<div className="my-20">
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
			</div>
		</section>
	)
}
