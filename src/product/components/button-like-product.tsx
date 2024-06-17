'use client'

import { useState } from 'react'
import { Button } from '@/ui/components'
import { HeartFilledIcon, HeartIcon } from '@/ui/icons'
import { cn } from '@/lib/utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	productId: string
	isLiked: boolean
}

export const ButtonLikeProduct = ({
	isLiked: liked,
	productId,
	className,
	...props
}: Props) => {
	const [isLiked, setIsLiked] = useState(liked)

	return (
		<Button
			size="icon"
			type="button"
			onClick={() => setIsLiked(!isLiked)}
			className={cn('rounded-full', className)}
			{...props}>
			{isLiked ? (
				<HeartFilledIcon className="size-5 text-destructive" />
			) : (
				<HeartIcon className="size-5" />
			)}
			<span className="sr-only">Agregar producto a favoritos</span>
		</Button>
	)
}
