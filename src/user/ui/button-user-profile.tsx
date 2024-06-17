'use client'

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/ui/components'
import {
	BoxSeamIcon,
	CreditCardIcon,
	LogOutIcon,
	MapPinsIcon,
	MoonIcon,
	RobotIcon,
	SettingsIcon,
	SunIcon,
	SunMoonIcon,
	UserIcon,
} from '@/ui/icons'

export const ButtonUserProfile = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="gap-2 items-center w-10 px-0 sm:px-4 sm:w-max">
					<UserIcon className="size-5" />
					<span className="font-medium text-sm hidden lg:block">
						Hola Pacho
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<UserIcon className="mr-2 size-4" />
						<span>Mi Perfil</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BoxSeamIcon className="mr-2 size-4" />
						<span>Pedidos</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCardIcon className="mr-2 size-4" />
						<span>Métodos de pago</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<MapPinsIcon className="mr-2 size-4" />
						<span>Direcciones</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<SettingsIcon className="mr-2 size-4" />
						<span>Configuración</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<SunMoonIcon className="mr-2 size-4" />
							<span>Tema</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<SunIcon className="mr-2 size-4" />
									<span>Claro</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MoonIcon className="mr-2 size-4" />
									<span>Obscuro</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<RobotIcon className="mr-2 size-4" />
									<span>Tema del Dispositivo</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOutIcon className="mr-2 size-4" />
					<span>Cerrar Sesión</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
