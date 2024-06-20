'use client'

import {
	Badge,
	Button,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Skeleton,
} from '@/ui/components'
import { XIcon } from '@/ui/icons'

interface Props {
	className?: string
}

export const NavigationToFilterAndSortProducts = ({ className }: Props) => {
	return (
		<div className={className}>
			<div>
				<h5 className="font-semibold text-lg inline-block">Filtros</h5>
				<Button variant="link" disabled>
					Limpiar Todo
				</Button>
			</div>
			<nav className="flex gap-3 flex-wrap">
				<Select>
					<SelectTrigger className="w-[130px]">
						<SelectValue placeholder="Ordenar Por" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
				<Button variant="select">Recién llegados</Button>
				<Button>Ofertas</Button>
				<Select>
					<SelectTrigger className="w-[100px]">
						<SelectValue placeholder="Color" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[100px]">
						<SelectValue placeholder="Talla" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</nav>
			<div className="mt-5 flex flex-wrap gap-2">
				<Badge variant="outline" className="py-1.5 font-normal gap-2 px-4">
					Nuevos Productos
					<XIcon className="size-4" />
				</Badge>
			</div>
		</div>
	)
}

export const NavigationToFilterAndSortProductsSkeleton = (
	props: React.HTMLAttributes<HTMLDivElement>
) => {
	return (
		<div {...props}>
			<div>
				<h5 className="font-semibold text-lg inline-block">Filtros</h5>
				<span className="opacity-50 text-sm font-medium px-4">
					Limpiar Todo
				</span>
			</div>
			<Skeleton className="w-full h-24 max-w-[600px] sm:h-10 mt-2" />
			<div className="flex mt-5 gap-2">
				<Skeleton className="w-24 h-6 " />
				<Skeleton className="w-28 h-6" />
			</div>
		</div>
	)
}
