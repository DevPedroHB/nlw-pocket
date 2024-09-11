import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";

export function Label({ className, ...rest }: ComponentProps<"label">) {
	return (
		<label
			className={cn(
				"font-medium text-sm tracking-tight leading-normal",
				className,
			)}
			{...rest}
		/>
	);
}
