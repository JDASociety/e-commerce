'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from '@/ui/components'

export const RegisterForm = () => {
	const onSubmit = (values: any) => {
		console.log(values)
	}

	const form = useForm({})

	return (
		<Form {...form}>
			<form
				className="register gap-2 grid grid-cols-1 sm:grid-cols-2"
				onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre(s):</FormLabel>
							<FormControl>
								<Input placeholder="Jonh Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Apellido(s):</FormLabel>
							<FormControl>
								<Input placeholder="pacho" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="sm:col-span-2">
							<FormLabel>Correo Electrónico:</FormLabel>
							<FormControl>
								<Input placeholder="hola@gmail.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="sm:col-span-2">
							<FormLabel>Contraseña:</FormLabel>
							<FormControl>
								<Input placeholder="*******" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Link
					className="hover:underline sm:col-span-2 font-medium text-sm text-end"
					href="/auth/forgot-password">
					Olvidaste tu contraseña?
				</Link>
				<Button className="w-full mt-3 sm:col-span-2" type="submit">
					Registra tu cuenta
				</Button>
			</form>
		</Form>
	)
}
