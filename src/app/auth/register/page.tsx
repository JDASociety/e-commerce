import { AuthLayout } from '@/auth/layouts'
import { RegisterForm } from './ui/register-form'

export default function RegisterPage() {
	return (
		<AuthLayout
			title="Crear una Cuenta."
			footer={{
				labelChange: '¿Ya tienes una cuenta?',
				textChange: 'Inicia Sesión',
				urlChange: '/auth/login',
			}}>
			<RegisterForm />
		</AuthLayout>
	)
}
