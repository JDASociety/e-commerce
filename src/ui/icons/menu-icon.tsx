import type { SVGProps } from 'react'

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 6l16 0" />
		<path d="M4 12l16 0" />
		<path d="M4 18l16 0" />
	</svg>
)
