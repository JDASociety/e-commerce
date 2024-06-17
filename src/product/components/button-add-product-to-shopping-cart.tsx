import type { Product } from '../interfaces'
import {
	DialogButtonAddProductToShoppingCart,
	DrawerButtonAddProductToShoppingCart,
} from './'
import { ShoppingCartPlusIcon } from '@/ui/icons'

const ChildrenButtonAddProductToShoppingCart = () => (
	<>
		<ShoppingCartPlusIcon className="size-5 text-white" />
		<span className="sr-only">
			Abrir navegador para eligir una talla y agregar el producto al carrito de
			compras
		</span>
	</>
)

interface Props {
	product: Product
}

export const ButtonAddProductToShoppingCart = ({ product }: Props) => {
	return (
		<>
			<DialogButtonAddProductToShoppingCart
				product={product}
				buttonProps={{
					type: 'button',
					className:
						'absolute top-2 left-2 bg-primary rounded-full bg-primary/60 hidden sm:flex',
					size: 'icon',
				}}>
				<ChildrenButtonAddProductToShoppingCart />
			</DialogButtonAddProductToShoppingCart>

			<DrawerButtonAddProductToShoppingCart
				product={product}
				buttonProps={{
					type: 'button',
					className:
						'absolute top-2 left-2 bg-primary rounded-full bg-primary/60 flex sm:hidden',
					size: 'icon',
				}}>
				<ChildrenButtonAddProductToShoppingCart />
			</DrawerButtonAddProductToShoppingCart>
		</>
	)
}
