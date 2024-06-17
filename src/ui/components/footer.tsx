import {
	ChevronRightIcon,
	FacebookLogoIcon,
	InstagramLogoIcon,
	TikTokLogoIcon,
	WebIconLogo,
} from '../icons'

interface Icon {
	icon: JSX.Element
	url: string
}

const icons: Icon[] = [
	{
		icon: <InstagramLogoIcon className="size-7" />,
		url: 'https://www.instagram.com',
	},
	{
		icon: <TikTokLogoIcon className="size-6" />,
		url: 'https://www.tiktok.com',
	},
	{
		icon: <FacebookLogoIcon className="size-6" />,
		url: 'https://www.facebook.com',
	},
]

type FooterLink = { id: number; title: string; url: string }

const footerLinks: FooterLink[][] = [
	[
		{ id: 1, title: 'Sobre nosotros', url: '#' },
		{ id: 2, title: 'Contáctanos', url: '#' },
		{ id: 3, title: 'Blog', url: '#' },
		{ id: 4, title: 'Historia', url: '#' },
	],
	[
		{ id: 5, title: 'Compañía', url: '#' },
		{ id: 6, title: 'Producto', url: '#' },
		{ id: 7, title: 'Newsletters', url: '#' },
		{ id: 8, title: 'Más', url: '#' },
	],
]

export function Footer() {
	return (
		<footer className="px-7 md:px-10 w-full border-t border-border">
			<div className="flex flex-col py-10 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col items-start justify-start gap-y-5">
					<a href="#" className="flex items-center gap-x-2.5">
						<WebIconLogo className="size-8" />
						<h1 className="text-xl font-bold">PanchoShop</h1>
					</a>
					<p className="tracking-tight">Ropa para Creadores</p>
					<div className="flex items-center gap-x-4">
						{icons.map((icon, index) => (
							<a
								key={index}
								href={icon.url}
								rel="noopener noreferrer"
								className=" text-primary/70 hover:text-primary">
								{icon.icon}
							</a>
						))}
					</div>
				</div>
				<div className="pt-5 md:w-1/2">
					<div className="flex items-center justify-end gap-x-10 lg:pl-10">
						{footerLinks.map((column, columnIndex) => (
							<ul key={columnIndex} className="flex flex-col gap-y-2">
								{column.map((link) => (
									<li
										key={link.id}
										className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-primary/60 duration-200 hover:text-primary">
										<a href={link.url}>{link.title}</a>
										<ChevronRightIcon className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
