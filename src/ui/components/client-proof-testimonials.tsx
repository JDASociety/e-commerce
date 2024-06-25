import { ReviewCard } from '@/reviews/components'
import { Marquee } from '.'
import { testimonials } from '@/mock'

export const ClientProofTestimonials = () => {
	return (
		<section id="testimonials" className="py-16">
			<div className="mx-auto md:container md:px-8">
				<header className="flex flex-col items-center">
					<h3 className="text-center text-2xl font-bold">
						Nuestra Calificación
					</h3>
					<p>
						Basada en <span className="underline">2303 calificaciones</span>
					</p>
				</header>
				<div className="relative mx-auto mt-6 max-w-[100vw] overflow-hidden">
					<div className="flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto py-14[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
						<Marquee pauseOnHover className="[--duration:60s]">
							<div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
							{testimonials().map((card, idx) => (
								<ReviewCard className="w-72 lg:min-w-96" {...card} key={idx} />
							))}
						</Marquee>
					</div>
					<div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/5 bg-gradient-to-r from-background md:block"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/5 bg-gradient-to-l from-background md:block"></div>
				</div>
			</div>
		</section>
	)
}
