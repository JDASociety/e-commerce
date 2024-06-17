import type { SVGProps } from 'react'

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M9 6l6 6l-6 6" />
	</svg>
)
