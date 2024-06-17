export interface Product {
	id: string
	name: string
	images: string[]
	price: number
	discount?: number
	isLiked?: boolean
	slug: string
	color: string
	rating: number
	clothingCut: string
}

export interface ProductDetail extends Product {
	description: string
	brand: string
	stock: number
}
