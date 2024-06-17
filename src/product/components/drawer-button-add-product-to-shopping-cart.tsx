import {
	Button,
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/ui/components'
import type { Product } from '../interfaces'
import { clothesSize } from '../vars'
import { AddProductToCartButtonBySize, ProductOfferCard } from './'

interface Props {
	children: React.ReactNode
	buttonProps?: React.ComponentProps<typeof Button>
	product: Product
}

export const DrawerButtonAddProductToShoppingCart = ({
	children,
	buttonProps,
	product,
}: Props) => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button {...buttonProps}>{children}</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm pb-10">
					<DrawerHeader className="sm:text-center">
						<DrawerTitle>AÑADIR RÁPIDAMENTE</DrawerTitle>
					</DrawerHeader>
					<ProductOfferCard product={product} />
					<div className="mt-4">
						<h4 className="font-bold mb-4">ELIGE UNA TALLA</h4>
						<div className="flex flex-col">
							{clothesSize.map((size) => (
								<AddProductToCartButtonBySize
									key={size.id}
									productId={product.id}
									size={size}
									disabled={false}
								/>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
