import Link from 'next/link'
import {
	buttonVariants,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/ui/components'
import { ChevronRightIcon } from '@/ui/icons'
import { CardProduct } from './card-product'
import type { Product } from '../interfaces'

interface Props {
	href: string
	listProducts: Product[]
	title: string
}

export const ProductListCarousel = ({ title, href, listProducts }: Props) => {
	return (
		<div className="w-full">
			<header className="w-full flex justify-between mb-6 items-center">
				<h2 className="text-2xl font-bold text-balance">{title}</h2>
				<Link
					href={href}
					className={buttonVariants({
						variant: 'link',
						className: 'group uppercase text-xs underline hover:no-underline',
					})}>
					Todos los productos
					<ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
				</Link>
			</header>
			<Carousel
				opts={{
					loop: true,
				}}>
				<CarouselContent>
					{listProducts.map(({ id, ...props }) => (
						<CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
							<CardProduct
								product={{
									id,
									...props,
								}}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext className="-right-4 bg-primary text-primary-foreground" />
				<CarouselPrevious className="-left-4 bg-primary text-primary-foreground" />
			</Carousel>
		</div>
	)
}
