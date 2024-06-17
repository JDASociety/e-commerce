import Link from 'next/link'
import { buttonVariants } from '@/ui/components'
import { UserIcon } from '@/ui/icons'

export const LinkLogin = () => {
	return (
		<Link
			href="/auth/login"
			className={buttonVariants({
				variant: 'ghost',
				className: 'gap-2 items-center w-10 px-0 sm:px-4 sm:w-max',
			})}>
			<UserIcon className="size-5" />
			<span className="font-medium text-sm hidden sm:block">
				Iniciar Sesión
			</span>
		</Link>
	)
}
