'use client'

import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/ui/components'
import { ShoppingCartIcon } from '@/ui/icons'

export const ButtonUserShoppingCart = () => {
	const productsInCart = 0

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<ShoppingCartIcon className="size-6" />
					<span className="sr-only">
						{productsInCart} productos en tu carrito
					</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px]">
				<SheetHeader>
					<SheetTitle>Tu Carrito</SheetTitle>
					<SheetDescription>
						{productsInCart} productos en tu carrito
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
