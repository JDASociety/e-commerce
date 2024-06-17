import type { SVGProps } from 'react'

export const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
		<path d="M3 10l18 0" />
		<path d="M7 15l.01 0" />
		<path d="M11 15l2 0" />
	</svg>
)
