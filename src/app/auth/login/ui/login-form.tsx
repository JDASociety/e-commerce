'use client'

import Link from 'next/link'
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
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
	const onSubmit = (values: any) => {
		console.log(values)
	}

	const form = useForm({})

	return (
		<Form {...form}>
			<form
				className="flex flex-col gap-2"
				onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email:</FormLabel>
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
						<FormItem>
							<FormLabel>Contraseña:</FormLabel>
							<FormControl>
								<Input placeholder="*******" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Link
					className="hover:underline font-medium text-sm self-end"
					href="/auth/forgot-password">
					Olvidaste tu contraseña?
				</Link>
				<Button className="w-full mt-3" type="submit">
					Iniciar Sesión
				</Button>
			</form>
		</Form>
	)
}
