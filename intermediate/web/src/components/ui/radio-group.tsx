import { cn } from "@/functions/cn";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CheckCircle2, Circle } from "lucide-react";

export function RadioGroup({
	className,
	...rest
}: RadioGroupPrimitive.RadioGroupProps) {
	return (
		<RadioGroupPrimitive.RadioGroup
			className={cn("flex flex-col gap-2", className)}
			{...rest}
		/>
	);
}

export function RadioGroupItem({
	className,
	...rest
}: RadioGroupPrimitive.RadioGroupItemProps) {
	return (
		<RadioGroupPrimitive.RadioGroupItem
			className={cn(
				"group bg-black border border-secondary-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-secondary-800 focus-visible:border-tertiary-500 focus-visible:ring-4 ring-tertiary-500/10 data-[state=checked]:bg-tertiary-500/5 data-[state=checked]:border-tertiary-500 transition-all",
				className,
			)}
			{...rest}
		/>
	);
}

export function RadioGroupIndicator() {
	return (
		<>
			<Circle className="size-4 text-secondary-600 group-data-[state=checked]:hidden transition-all" />
			<CheckCircle2 className="size-4 text-tertiary-500 hidden group-data-[state=checked]:inline transition-all" />
		</>
	);
}
