'use client'

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

export const NewsletterSubscriptionForm = () => {
	const onSubmit = (values: any) => {
		console.log(values)
	}

	const form = useForm({})

	return (
		<Form {...form}>
			<form className="flex gap-5 items-center flex-wrap">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-[330px]">
							<FormControl>
								<Input placeholder="Introduce tu Correo" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-[135px]" type="submit">
					Suscribirse
				</Button>
			</form>
		</Form>
	)
}
