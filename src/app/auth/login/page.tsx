import { AuthLayout } from '@/auth/layouts'
import { LoginForm } from './ui/login-form'

export default function LoginPage() {
	return (
		<AuthLayout
			title="Iniciar Sesión."
			footer={{
				labelChange: '¿No tienes una cuenta?',
				textChange: 'Regístrate',
				urlChange: '/auth/register',
			}}>
			<LoginForm />
		</AuthLayout>
	)
}
