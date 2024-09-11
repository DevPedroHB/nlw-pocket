import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";

export function Separator({ className, ...rest }: ComponentProps<"div">) {
	return <div className={cn("h-px bg-secondary-900", className)} {...rest} />;
}
