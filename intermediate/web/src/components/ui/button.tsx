import { type ComponentProps, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
	base: "flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 transition-all",
	variants: {
		variant: {
			primary:
				"bg-primary-500 text-primary-50 hover:bg-primary-600 ring-primary-500",
			secondary:
				"bg-secondary-900 text-secondary-400 hover:bg-secondary-800 ring-secondary-900",
		},
		size: {
			default: "px-4 py-2.5",
			sm: "px-3 py-1.5",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
	},
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...rest }, ref) => {
		return (
			<button
				ref={ref}
				className={button({ variant, size, className })}
				{...rest}
			/>
		);
	},
);

Button.displayName = "Button";
