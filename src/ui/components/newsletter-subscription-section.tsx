import { NewsletterSubscriptionForm } from '@/user/ui'

export const NewsletterSubscriptionSection = () => {
	return (
		<section className="bg-primary/5 p-10 flex justify-between items-center flex-wrap gap-8">
			<article className="max-w-[45ch] ">
				<h3 className="text-lg font-bold text-balance mb-3">
					Obtenga un 5% de descuento adicional
				</h3>
				<p className="text-sm">
					Suscríbete al boletín mensual. Recibe las últimas actualizaciones de
					productos y ofertas especiales directamente en tu bandeja de entrada.
				</p>
			</article>
			<NewsletterSubscriptionForm />
		</section>
	)
}
