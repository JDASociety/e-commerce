import Link from 'next/link'
import { ButtonSearchProducts, SearchInputProducts } from '@/product/components'
import {
	ButtonUserLikesProducts,
	ButtonUserProfile,
	ButtonUserShoppingCart,
} from '@/user/ui'
import { LinkLogin } from '@/auth/ui'
import { NavigationMenuCategories } from '@/category/ui'
import { WebIconLogo } from '../icons'
import { HEIGHT_TOTAL_NAVBAR } from '../vars'
import { MobileMenuBar } from '.'

export const NavBar = () => {
	const isAuth = true

	return (
		<nav
			style={{ height: HEIGHT_TOTAL_NAVBAR }}
			className="flex flex-col gap-2 sticky bg-background z-50 top-0 w-full pt-5 pb-2 px-5 md:px-10 border-b border-primary/20">
			<header className="grid grid-cols-3 w-full">
				<div className="flex gap-1 items-center md:hidden">
					<MobileMenuBar />
					<ButtonSearchProducts />
				</div>

				<Link
					href="/"
					className="flex justify-center items-center md:justify-start ">
					<WebIconLogo className="size-9 " />
					<span className="hidden md:block font-bold">PanchoShop</span>
				</Link>

				<div className="hidden md:block">
					<SearchInputProducts />
				</div>

				<div className="flex justify-end gap-1">
					<ButtonUserLikesProducts />
					{isAuth ? <ButtonUserProfile /> : <LinkLogin />}
					<ButtonUserShoppingCart />
				</div>
			</header>
			<footer className="grid grid-cols-1 place-items-center md:grid-cols-3">
				<NavigationMenuCategories />
			</footer>
		</nav>
	)
}
