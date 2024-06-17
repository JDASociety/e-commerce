'use client'

import { Button } from '@/ui/components'
import { ClothesSize } from '../interfaces'
import { OctagonPlusIcon } from '@/ui/icons'

interface Props {
	productId: string
	size: ClothesSize
	disabled?: boolean
}

export const AddProductToCartButtonBySize = ({
	productId,
	size,
	disabled = false,
}: Props) => {
	return (
		<Button
			disabled={disabled}
			variant="outline"
			className="justify-between font-bold rounded-none border-b-transparent"
			onClick={() => console.log({ size, productId })}>
			{size.name}
			<span className="flex gap-2">
				Añadir al carrito
				<OctagonPlusIcon className="size-5" />
			</span>
		</Button>
	)
}
