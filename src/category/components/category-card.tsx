import { SquareArrowOutUpRightIcon } from '@/ui/icons'
import Image from 'next/image'

interface Props {
	name: string
	image: string
	href: string
}

export const CategoryCard = ({ href, image, name }: Props) => {
	return (
		<a
			href={href}
			className='group relative flex justify-start items-end p-4 overflow-hidden rounded-xl  text-center text-balance w-[300px] h-[200px] before:z-10 before:opacity-50 before:top-0 before:left-0 before:w-full before:h-full before:absolute before:content-[""] before:bg-gradient-to-b before:from-transparent before:from-40% before:via-primary-/90 before:to-primary hover:shadow-md transition-shadow duration-200'>
			<Image
				src={image}
				className="absolute ease-in-out group-hover:scale-110 duration-200 top-0 left-0 w-full h-full z-0 object-cover"
				alt="Category"
				width={300}
				height={200}
			/>
			<h3 className="z-10 font-bold text-primary-foreground ease-in-out group-hover:text-[17px] duration-200">
				{name}
			</h3>
			<SquareArrowOutUpRightIcon className="size-4 absolute bottom-4 right-4 text-primary-foreground z-10 !duration-200 ease-in-out opacity-0 group-hover:opacity-100 transition-all group-hover:animate-in group-hover:fade-in group-hover:slide-in-from-bottom-10" />
		</a>
	)
}
