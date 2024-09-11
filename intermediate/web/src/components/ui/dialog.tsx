import { cn } from "@/functions/cn";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export function Dialog(props: DialogPrimitive.DialogProps) {
	return <DialogPrimitive.Dialog {...props} />;
}

export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
	return <DialogPrimitive.DialogTrigger {...props} />;
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
	return <DialogPrimitive.DialogClose {...props} />;
}

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
	return <DialogPrimitive.DialogPortal {...props} />;
}

export function DialogOverlay({
	className,
	...rest
}: DialogPrimitive.DialogOverlayProps) {
	return (
		<DialogPrimitive.DialogOverlay
			className={cn(
				"fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
				className,
			)}
			{...rest}
		/>
	);
}

export function DialogContent({
	className,
	...rest
}: DialogPrimitive.DialogContentProps) {
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.DialogContent
				className={cn(
					"fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-secondary-900 bg-secondary-950 p-8",
					className,
				)}
				{...rest}
			/>
		</DialogPortal>
	);
}

export function DialogTitle({
	className,
	...rest
}: DialogPrimitive.DialogTitleProps) {
	return (
		<DialogPrimitive.DialogTitle
			className={cn("text-lg font-semibold", className)}
			{...rest}
		/>
	);
}

export function DialogDescription({
	className,
	...rest
}: DialogPrimitive.DialogDescriptionProps) {
	return (
		<DialogPrimitive.DialogDescription
			className={cn("text-secondary-400 text-sm leading-relaxed", className)}
			{...rest}
		/>
	);
}
