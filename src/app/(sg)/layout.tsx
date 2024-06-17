import { Footer, NavBar } from '@/ui/components'

export default function SgLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	)
}
