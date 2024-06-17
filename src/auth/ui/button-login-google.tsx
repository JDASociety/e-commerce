'use client'

import { Button } from '@/ui/components'
import { GoogleIcon } from '@/ui/icons'

export const ButtonLoginGoogle = () => {
	return (
		<Button className="w-full gap-2" variant="outline">
			<GoogleIcon className="size-4" />
			Iniciar con Google
		</Button>
	)
}
