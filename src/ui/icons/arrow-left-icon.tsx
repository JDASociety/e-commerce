import type { SVGProps } from 'react'

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		stroke="currentColor"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M5 12l14 0" />
		<path d="M5 12l6 6" />
		<path d="M5 12l6 -6" />
	</svg>
)
