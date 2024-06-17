'use client'

import Link from 'next/link'
import { buttonVariants } from '@/ui/components'
import { HeartIcon } from '@/ui/icons'

export const ButtonUserLikesProducts = () => {
	const productsLikes = 0

	return (
		<Link
			href="/user/likes-products"
			className={buttonVariants({
				variant: 'ghost',
				size: 'icon',
			})}>
			<HeartIcon className="size-6" />
			<span className="sr-only">{productsLikes} Productos que te gustan</span>
		</Link>
	)
}
