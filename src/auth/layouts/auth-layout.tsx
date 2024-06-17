import Link from 'next/link'
import { ButtonLoginGoogle } from '../ui'
import { buttonVariants, Separator } from '@/ui/components'
import { ArrowLeftIcon } from '@/ui/icons'

interface AuthFooterProps {
	labelChange: string
	textChange: string
	urlChange: string
}

interface AuthLayoutProps {
	title: string
	backUrl?: string
	children: React.ReactNode
	footer?: AuthFooterProps
}

export const AuthLayout = ({
	children,
	title,
	footer,
	backUrl = '/',
}: AuthLayoutProps) => {
	return (
		<div className="flex flex-col gap-2 md:relative">
			<Link
				href={backUrl}
				className={buttonVariants({
					variant: 'ghost',
					className: 'gap-1 absolute top-6 left-6 md:-top-12 md:-left-12',
				})}>
				<ArrowLeftIcon className="size-6 stroke-2" />
				<span className="block md:sr-only">Volver</span>
			</Link>
			<header className="space-y-2 mb-4">
				<h1 className="font-bold text-2xl">{title}</h1>
				<p className="text-primary/80 text-md">Introduce tu información</p>
			</header>
			{children}
			{!!footer && (
				<footer className="flex flex-col gap-2">
					<div className="flex gap-3 items-center">
						<Separator className="shrink" /> o <Separator className="shrink" />
					</div>
					<ButtonLoginGoogle />
					<p className="text-md mt-4">
						{footer.labelChange}&nbsp;
						<Link
							href={footer.urlChange}
							className="font-semibold text-primary hover:underline">
							{footer.textChange}
						</Link>
					</p>
				</footer>
			)}
		</div>
	)
}
