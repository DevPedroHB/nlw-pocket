import { cn } from "@/functions/cn";
import * as ProgressPrimitive from "@radix-ui/react-progress";

export function Progress({
	className,
	...rest
}: ProgressPrimitive.ProgressProps) {
	return (
		<ProgressPrimitive.Progress
			className={cn("bg-secondary-900 rounded-full h-2", className)}
			{...rest}
		/>
	);
}

export function ProgressIndicator({
	className,
	...rest
}: ProgressPrimitive.ProgressIndicatorProps) {
	return (
		<ProgressPrimitive.Indicator
			className={cn(
				"bg-gradient-to-r from-tertiary-500 to-primary-500 w-1/2 h-2 rounded-full",
				className,
			)}
			{...rest}
		/>
	);
}
