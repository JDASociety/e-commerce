import { AuthLayout } from '@/auth/layouts'

export default function ForgotPasswordPage() {
	return (
		<AuthLayout title="Recuperar Contraseña." backUrl="/auth/login">
			recuperar contraseña
		</AuthLayout>
	)
}
