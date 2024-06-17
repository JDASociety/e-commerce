import {
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/ui/components'
import { SearchIcon } from '@/ui/icons'

export const ButtonSearchProducts = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<SearchIcon className="size-6" />
					<span className="sr-only">Abrir menú de búsqueda de productos</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[400px] sm:w-[540px]">
				<SheetHeader>
					<SheetTitle>Busca un Producto</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
