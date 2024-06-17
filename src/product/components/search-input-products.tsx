'use client'

import { useForm } from 'react-hook-form'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	Input,
} from '@/ui/components'
import { SearchIcon, XIcon } from '@/ui/icons'

export const SearchInputProducts = () => {
	const onSubmit = (values: any) => {
		console.log(values)
	}

	const form = useForm({})
	return (
		<Form {...form}>
			<form
				className="max-w-[400px] w-full"
				onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="product"
					render={({ field }) => (
						<FormItem className="relative space-y-0">
							<SearchIcon className="size-4 absolute top-1/2 left-2 -translate-y-1/2" />
							<FormControl>
								<Input
									className="pl-8"
									placeholder="Busca un producto"
									{...field}
								/>
							</FormControl>
							<Button
								variant="ghost"
								type="button"
								size="icon"
								className="absolute top-1/2 right-1 rounded-full size-8 -translate-y-1/2">
								<XIcon className="size-4" />
							</Button>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}
