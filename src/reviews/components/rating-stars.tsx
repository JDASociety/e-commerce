import { cn } from '@/lib/utils'
import { StarFilledIcon } from '@/ui/icons'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	rating: number
}

export const RatingStars = ({ rating, className, ...props }: Props) => {
	return (
		<div {...props} className={cn('flex gap-1 items-center', className)}>
			{Array.from({ length: 5 }).map((_, idx) => (
				<StarFilledIcon
					key={idx}
					className={cn('size-5', {
						'opacity-35': idx + 1 > rating,
					})}
				/>
			))}
		</div>
	)
}
