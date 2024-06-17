import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/components'
import { Product } from '../interfaces'
import { clothesSize } from '../vars'
import { AddProductToCartButtonBySize, ProductOfferCard } from './'

interface Props {
	children: React.ReactNode
	buttonProps?: React.ComponentProps<typeof Button>
	product: Product
}

export const DialogButtonAddProductToShoppingCart = ({
	children,
	buttonProps,
	product,
}: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button {...buttonProps}>{children}</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>AÑADIR RÁPIDAMENTE</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
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
				<DialogFooter>
					<DialogClose asChild>
						<Button type="submit">Cancelar</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
