'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { WebIconLogo } from '@/ui/icons'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/ui/components'

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Playeras',
		href: '#',
		description: 'Diseños de playeras personalizados para creadores.',
	},
	{
		title: 'Sudaderas',
		href: '#',
		description: 'Diseños de sudaderas personalizados para creadores.',
	},
	{
		title: 'Accesorios',
		href: '#',
		description:
			'Nuestros accesorios son perfectos para combinar con tus outfits.',
	},
]

export function NavigationMenuCategories() {
	return (
		<NavigationMenu className="md:col-start-2 md:col-end-3">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Hombre</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="#">
										<WebIconLogo className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											PanchoShop
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Diseños de ropa personalizados para creadores.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Mujer</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}>
									{component.description}
								</ListItem>
							))}
							<li className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4 row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="#">
										<WebIconLogo className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											PanchoShop
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Diseños de ropa personalizados para creadores.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/#" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Nuevos Drops
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
