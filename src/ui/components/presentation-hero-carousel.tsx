'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
	Button,
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
} from '@/ui/components'
import { cn } from '@/lib/utils'
import { HEIGHT_TOTAL_NAVBAR } from '@/ui/vars'

type FrontPosition =
	| 'bottom-left'
	| 'left'
	| 'top-left'
	| 'top'
	| 'top-right'
	| 'right'
	| 'bottom-right'
	| 'center'

interface Front {
	id: number
	title: string
	description: string
	image: string
	position: FrontPosition
	actions: React.ReactNode[]
}

export const PresentationHeroCarousel = () => {
	const fronts: Front[] = [
		{
			id: 1,
			title: 'Nuevos Meses Nuevos Drops',
			description:
				'Y aún más motivos nuevos para ir al gimnasio. Nos vemos allí.',
			image:
				'https://img.freepik.com/free-photo/multi-colored-shirts-hanging-modern-boutique-store-generated-by-ai_188544-43479.jpg',
			position: 'right',
			actions: [
				<Button key={1}>Comprar</Button>,
				<Button key={2} variant="secondary">
					Ver más
				</Button>,
			],
		},
		{
			id: 2,
			title: 'Nuevos Meses, Nuevos Drops',
			description:
				'Y aún más motivos nuevos para ir al gimnasio. Nos vemos allí.',
			image:
				'https://img.freepik.com/premium-photo/black-t-shirt-isolated-background_488220-34975.jpg',
			position: 'left',
			actions: [
				<Button key={1}>Comprar</Button>,
				<Button key={2} variant="secondary">
					Ver más
				</Button>,
			],
		},
		{
			id: 3,
			title: 'Nuevos Meses, Nuevos Drops',
			description:
				'Y aún más motivos nuevos para ir al gimnasio. Nos vemos allí.',
			image:
				'https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-d-render-of-a-black-t-shirt-against-a-concrete-wall-image_3716629.jpg',
			position: 'center',
			actions: [
				<Button key={1}>Comprar</Button>,
				<Button key={2} variant="secondary">
					Ver más
				</Button>,
			],
		},
	]

	return (
		<section>
			<Carousel
				opts={{
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}>
				<CarouselContent
					style={{
						height: `calc(100vh - ${HEIGHT_TOTAL_NAVBAR}px)`,
					}}>
					{fronts.map(
						({ actions, description, id, image, position, title }, index) => (
							<CarouselItem
								key={id}
								className="h-full bg-cover bg-center bg-no-repeat text-primary-foreground pl-0"
								style={{
									backgroundImage: `url(${image})`,
								}}>
								<div
									className={cn(
										'h-full back text-primary-foreground flex justify-center items-center py-8 px-10 pr-6 pl-10 sm:py-12 sm:pr-14 sm:pl-14 relative before:z-10 before:opacity-50 before:top-0 before:left-0 before:w-full before:h-full before:absolute before:content-[""] before:[background:linear-gradient(var(--carousel-deg-blurred),_transparent_0,_#000_90.28%)]',
										{
											'justify-center items-center text-center [&>article]:items-center [&>article]:justify-center before:[background:radial-gradient(circle,_#000_0%,_transparent_60%)]':
												position === 'center',
											'justify-start items-center [--carousel-deg-blurred:270deg]':
												position === 'left',
											'justify-end items-center text-right [&>article]:items-end [--carousel-deg-blurred:90deg]':
												position === 'right',
											'justify-center items-start text-center [&>article]:items-center [&>article]:justify-center [--carousel-deg-blurred:0deg]':
												position === 'top',
											'justify-start items-start [--carousel-deg-blurred:320deg]':
												position === 'top-left',
											'justify-end items-start text-right [&>article]:items-end [--carousel-deg-blurred:45deg]':
												position === 'top-right',
											'justify-start items-end [--carousel-deg-blurred:220deg]':
												position === 'bottom-left',
											'justify-end items-end text-right [&>article]:items-end [--carousel-deg-blurred:135deg]':
												position === 'bottom-right',
										}
									)}>
									<article className="flex flex-col space-y-3 text-balance z-50">
										<h3 className="text-3xl sm:text-5xl font-bold max-w-[15ch]">
											{title}
										</h3>
										<p className="font-normal text-sm sm:font-light max-w-[38ch] inline-block">
											{description}
										</p>
										<footer className="flex gap-2">
											{actions.map((action, index) => action)}
										</footer>
									</article>
								</div>
							</CarouselItem>
						)
					)}
				</CarouselContent>
				<CarouselDots className="absolute bottom-10 -translate-x-1/2 left-1/2" />
			</Carousel>
		</section>
	)
}
