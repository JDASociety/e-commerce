'use client'

import { Button, Input, Link } from '@nextui-org/react'

export default function LoginPage() {
	return (
		<div
			style={{
				display: 'flex',
				width: '100vw',
				height: '100vh',
			}}>
			<div className="w-full h-screen flex justify-center items-center">
				<div className="w-full max-w-[380px]">
					<h1 className="font-extrabold text-7xl mb-2">¡Hola!</h1>
					<p className="font-medium text-lg text-balance">
						Hola, introduce tus credenciales
					</p>
					<form className="mt-7 flex flex-col gap-5">
						<Input
							fullWidth
							type="email"
							label="Email"
							variant="bordered"
							defaultValue="junior@nextui.org"
						/>
						<Input
							fullWidth
							type="password"
							label="Password"
							variant="bordered"
							defaultValue="junior@nextui.org"
						/>

						<Link href="/auth/forgot-password" className="self-end">
							Olvidé mi contraseña
						</Link>

						<Button
							color="primary"
							spinner={
								<svg
									className="animate-spin h-5 w-5 text-current"
									fill="none"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										fill="currentColor"
									/>
								</svg>
							}>
							Iniciar sesión
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
