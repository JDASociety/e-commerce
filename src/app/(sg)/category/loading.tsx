import Link from 'next/link'
import { buttonVariants, Separator, Skeleton } from '@/ui/components'
import { ArrowLeftIcon } from '@/ui/icons'
import {
	CardProductSkeleton,
	NavigationToFilterAndSortProductsSkeleton,
} from '@/product/components'

export default function LoadingCategoryPage() {
	return (
		<section className="py-6">
			<div className="px-10">
				<Link
					href="/"
					className={buttonVariants({
						variant: 'link',
						className: 'gap-1 block font-semibold w-min pl-0',
					})}>
					<ArrowLeftIcon className="size-5" />
					Volver al Inicio
				</Link>
				<Skeleton className="w-20 h-4 mt-2" />
				<Skeleton className="w-52 h-7 mt-2" />
				<Skeleton className="w-28 h-4 mt-2" />
			</div>
			<Separator className="mt-6 mb-7" />
			<NavigationToFilterAndSortProductsSkeleton className="px-10" />
			<div className="flex mt-9 gap-5 px-10 flex-wrap justify-center">
				{Array.from({ length: 15 }).map((_, index) => (
					<CardProductSkeleton key={index} />
				))}
			</div>
		</section>
	)
}
