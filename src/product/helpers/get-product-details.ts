import { productDetails } from '@/mock/product-details'
import type { ProductDetails } from '../interfaces'

export const getProductDetails = async (
	id: string
): Promise<
	| {
			ok: true
			product: ProductDetails
	  }
	| {
			ok: false
	  }
> => {
	try {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					ok: true,
					product: productDetails,
				})
			}, 1000)
		})
	} catch (error) {
		return {
			ok: false,
		}
	}
}
