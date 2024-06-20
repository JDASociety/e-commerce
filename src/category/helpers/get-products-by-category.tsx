import type { Product } from '@/product/interfaces'
import { products } from '@/mock'

export const getProductsByCategory = async (
	slug: string,
	asdf: any
): Promise<Product[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(slug)
			console.log(asdf)
			resolve(products)
		}, 1000)
	})
}
