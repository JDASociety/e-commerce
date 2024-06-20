import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Progress,
} from '@/ui/components'

interface Props {
	totalProducts: number
	productsPerPage?: number
}

export const PaginationProducts = ({
	productsPerPage = 15,
	totalProducts,
}: Props) => {
	return (
		<Pagination className="mt-16 flex-col flex items-center gap-5">
			<div>
				<h5 className="mb-2 font-semibold text-sm">
					Mostrando 10 de {totalProducts} productos
				</h5>
				<Progress value={(productsPerPage / totalProducts) * 100} />
			</div>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
