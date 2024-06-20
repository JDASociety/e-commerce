'use client'

import { useForm } from 'react-hook-form'
import {
	Button,
	Form,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/ui/components'
import { ShoppingCartPlusIcon } from '@/ui/icons'

export const FormAddToCartShopping = () => {
	const form = useForm({})

	return (
		<Form {...form}>
			<form className="mt-5 flex flex-col gap-3">
				<Select>
					<SelectTrigger className="">
						<SelectValue placeholder="Selecciona un Color" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Rojo</SelectItem>
						<SelectItem value="dark">Negro</SelectItem>
						<SelectItem value="system">Verde</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="">
						<SelectValue placeholder="Selecciona una Talla" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">XS</SelectItem>
						<SelectItem value="dark">M</SelectItem>
						<SelectItem value="system">L</SelectItem>
					</SelectContent>
				</Select>
				<Button className="gap-2 font-semibold sticky bottom-3">
					<ShoppingCartPlusIcon className="size-5" />
					Añadir al Carrito
				</Button>
			</form>
		</Form>
	)
}
