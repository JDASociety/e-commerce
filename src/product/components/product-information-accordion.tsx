import { RatingStars, ReviewCard } from '@/reviews/components'
import { Review } from '@/reviews/interfaces'
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
	ScrollArea,
} from '@/ui/components'

interface Props {
	detailsProduct: string
	totalReviews: number
	reviews: Review[]
	rating: number
}

export const ProductInformationAccordion = ({
	reviews,
	rating,
	totalReviews,
	detailsProduct,
}: Props) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
			id="product-reviews">
			<AccordionItem value="item-1">
				<AccordionTrigger>Detalles del Producto</AccordionTrigger>
				<AccordionContent>{detailsProduct}</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Tamaño y medidas</AccordionTrigger>
				<AccordionContent></AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>
					<div className="flex flex-col text-start">
						Reseñas
						<div className="flex gap-3 items-center">
							<RatingStars rating={rating} />
							<span>({totalReviews})</span>
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<ScrollArea className="h-[350px] pr-3">
						<div className="flex flex-col gap-4">
							{reviews.map((review) => (
								<ReviewCard
									key={review.id}
									name={review.name}
									createdAt={review.createdAt}
									description={review.description}
								/>
							))}
						</div>
					</ScrollArea>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
