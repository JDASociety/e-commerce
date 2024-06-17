'use client'

import { MenuIcon } from '../icons'
import { Button } from './button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '.'

export const MobileMenuBar = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<MenuIcon className="size-6" />
					<span className="sr-only">Abrir menú de navegación</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[400px] sm:w-[540px]">
				<SheetHeader>
					<SheetTitle>Hola bro</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
