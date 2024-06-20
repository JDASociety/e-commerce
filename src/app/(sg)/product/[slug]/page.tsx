import Link from 'next/link'
import {
	ButtonLikeProduct,
	PreviewProductImages,
	ProductListCarousel,
} from '@/product/components'
import { buttonVariants, PosterPromotion } from '@/ui/components'
import { ArrowLeftIcon, CheckIcon, StarFilledIcon } from '@/ui/icons'
import { FormAddToCartShopping } from './ui/form-add-to-cart-shopping'
import { products } from '@/mock'

export default function ProductDetailsPage({
	...props
}: {
	params: { slug?: string }
}) {
	console.log(props)

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
			<div className="flex flex-col md:flex-row gap-10">
				<PreviewProductImages />
				<div>
					<div className="flex justify-between">
						<h1 className="font-semibold text-balance text-2xl">
							Camisa de Algodón
						</h1>
						<ButtonLikeProduct productId="" isLiked={false} />
					</div>
					<p className="max-w-[65ch] h-[72px] overflow-hidden text-ellipsis">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
						excepturi numquam maxime vero suscipit! Suscipit consectetur
						reprehenderit explicabo laborum iusto? Dolore hic explicabo, quod
						iusto magni ipsum beatae molestias iure? adf añskdf ñasldkf ñalskd
						fjñalsdk fjñ asdfñlasdf lkasd faklsdjf
						<div>
							<span>
								<span></span>
							</span>
							<span>Envío en 5-7 días</span>
						</div>
					</p>
					<div className="mt-4">
						<span className="text-3xl font-semibold">$95</span>
						<span className="block text-sm">IVA incluido</span>
					</div>
					<Link
						href="#"
						className={buttonVariants({
							variant: 'link',
							className: 'gap-1 items-center pl-0',
						})}>
						<StarFilledIcon className="size-5" />
						<StarFilledIcon className="size-5" />
						<StarFilledIcon className="size-5" />
						<StarFilledIcon className="size-5" />
						<StarFilledIcon className="size-5" />
						<span className="ml-2">(12)</span>
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
					<div className="mt-6">
						<p className="max-w-[65ch]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
							corporis perspiciatis culpa commodi quae laboriosam esse magni
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
