import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode
}

export const TextHighlight = ({ children, className, ...props }: Props) => {
	return (
		<span
			className={cn('bg-primary/20 p-1 py-0.5 font-bold', className)}
			{...props}>
			{children}
		</span>
	)
}
