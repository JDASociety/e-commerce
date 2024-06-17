import { cn } from '@/lib/utils'
import { StarFilledIcon } from '../icons'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	name: string
	createdAt: string
	description: React.ReactNode
}

export const TestimonialCard = ({
	description,
	name,
	createdAt,
	className,
	...props
}: Props) => {
	const DATE_UNITS: {
		[key: string]: number
	} = {
		// in seconds
		year: 31536000,
		month: 2629800,
		day: 86400,
		hour: 3600,
		minute: 60,
		second: 1,
	}

	const languageCode = 'es'

	const rtf = new Intl.RelativeTimeFormat(languageCode, { numeric: 'auto' })

	const getRelativeTime = (timestamp: number) => {
		const from = new Date(timestamp).getTime()
		const now = new Date().getTime()

		const elapsed = (from - now) / 1000

		for (const unit in DATE_UNITS) {
			if (Math.abs(elapsed) > DATE_UNITS[unit]) {
				return rtf.format(
					Math.floor(elapsed / DATE_UNITS[unit]),
					unit as Intl.RelativeTimeFormatUnit
				)
			}
		}

		return rtf.format(0, 'second')
	}

	const timestamp = new Date(createdAt).getTime()
	const timeAgo = getRelativeTime(timestamp)

	return (
		<div
			className={cn(
				'flex w-72 shrink-0 snap-center snap-always flex-col justify-between rounded-xl p-4 lg:min-w-96 border border-border',
				className
			)}
			{...props}>
			<div className="select-none font-normal">{description}</div>

			<div className="select-none">
				<div className="flex flex-row py-1">
					<StarFilledIcon className="size-4" />
					<StarFilledIcon className="size-4" />
					<StarFilledIcon className="size-4" />
					<StarFilledIcon className="size-4" />
					<StarFilledIcon className="size-4" />
				</div>
				<p className="font-medium text-primary/70">{name}</p>
				<p className="text-sm font-normal text-primary/50">{timeAgo}</p>
			</div>
		</div>
	)
}
