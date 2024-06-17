import Image from 'next/image'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="md:h-screen w-full flex justify-center items-center">
			<main className="md:rounded-xl overflow-hidden md:shadow-xl md:border md:border-border w-full md:w-max flex justify-center md:has-[.register]:flex-row-reverse">
				<section className="flex pt-28 px-12 pb-12 md:pt-12">
					{children}
				</section>
				<section className="hidden md:flex bg-primary/10 items-center py-10 px-8 justify-center flex-col text-balance text-center">
					<p className="text-lg mb-3">Encantado de verte de nuevo</p>
					<h2 className="font-bold text-3xl mb-2">Bienvenido(a) de nuevo</h2>
					<Image src="/images/auth.jpg" alt="Auth" width={200} height={200} />
				</section>
			</main>
		</div>
	)
}
