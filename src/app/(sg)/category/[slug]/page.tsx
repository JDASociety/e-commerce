import Link from 'next/link'
import { buttonVariants, Separator } from '@/ui/components'
import { ArrowLeftIcon } from '@/ui/icons'
import {
	CardProduct,
	NavigationToFilterAndSortProducts,
	PaginationProducts,
} from '@/product/components'
import { getProductsByCategory } from '@/category/helpers'

export default async function CategoryPage({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: { page?: string; size?: string }
}) {
	const products = await getProductsByCategory(params.slug, searchParams)

	return (
		<div className="flex flex-col gap-6 py-6">
			<header className="px-10 w-full">
				<Link
					href="/"
					className={buttonVariants({
						variant: 'link',
						className: 'gap-1 block font-semibold w-min pl-0',
					})}>
					<ArrowLeftIcon className="size-5" />
					Volver al Inicio
				</Link>
				<span className="block opacity-80 text-sm font-medium mt-1">
					Hombres
				</span>
				<h1 className="font-bold text-3xl">Camisetas</h1>
				<span className="font-medium text-sm">{products.length} Productos</span>
			</header>
			<Separator />
			<section className="px-10">
				<NavigationToFilterAndSortProducts />

				<div className="flex mt-8 gap-5 flex-wrap justify-center">
					{products.map((product) => (
						<CardProduct key={product.id} product={product} />
					))}
				</div>

				<PaginationProducts totalProducts={products.length} />
			</section>
		</div>
	)
}
