import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	title: string
	description: string
	percentage: number
	imageUrl: string
	pallete?: 'white' | 'black'
	redirection?: {
		url: string
		urlDescription: string
	}
}

export const PosterPromotion = ({
	description,
	percentage,
	title,
	redirection,
	pallete = 'black',
	imageUrl,
}: Props) => {
	const Parent = redirection ? 'a' : 'article'

	return (
		<Parent
			className={cn(
				'relative flex w-full rounded-md h-[320px] p-10 px-16 before:z-10 before:opacity-50 before:top-0 before:left-0 before:w-full before:h-full before:absolute before:content-[""] overflow-hidden',
				{
					'text-primary before:[background:linear-gradient(220deg,_transparent_30%,_#fff_90.28%)]':
						pallete === 'black',
					'text-primary-foreground before:[background:linear-gradient(220deg,_transparent_30%,_#000_90.28%)]':
						pallete === 'white',
					group: !!redirection,
				}
			)}
			{...(redirection && {
				href: redirection.url,
			})}>
			<Image
				src={imageUrl}
				alt={`Imagen de fondo de poster de promoción de ${title}`}
				width={1050}
				height={1050}
				className="w-full h-full absolute object-cover top-0 left-0 z-0 ease-in-out group-hover:scale-110 duration-200"
			/>
			<div className="relative z-10 flex flex-col h-full w-full">
				<h3 className="font-bold text-4xl">{title}</h3>
				<span className="mt-4">ARRIBA DEL</span>
				<span className="font-black text-7xl">{percentage}%</span>
				<span className="font-medium">{description}</span>
			</div>
		</Parent>
	)
}
