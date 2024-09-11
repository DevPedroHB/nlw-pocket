import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";

export function OutlineButton({
	className,
	...rest
}: ComponentProps<"button">) {
	return (
		<button
			className={cn(
				"flex items-center px-3 py-2 gap-2 leading-none rounded-full border border-dashed border-secondary-800 text-sm text-secondary-300 hover:border-secondary-700 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:border-tertiary-500 ring-tertiary-500/10 focus-visible:ring-4 transition-all",
				className,
			)}
			{...rest}
		/>
	);
}
