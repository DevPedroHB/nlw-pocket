import { cn } from "@/functions/cn";
import { type ComponentProps, forwardRef } from "react";

type InputProps = ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					"px-4 h-12 bg-black border border-secondary-900 rounded-lg placeholder-secondary-400 outline-none text-sm hover:border-secondary-800 focus-visible:border-tertiary-500 focus-visible:ring-4 ring-tertiary-500/10 transition-all",
					className,
				)}
				{...rest}
			/>
		);
	},
);

Input.displayName = "Input";
