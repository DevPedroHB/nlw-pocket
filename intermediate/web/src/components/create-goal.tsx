import { createGoal } from "@/actions/create-goal";
import { cn } from "@/functions/cn";
import {
	type CreateGoalSchema,
	createGoalSchema,
} from "@/types/schemas/create-goal-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToggle } from "@uidotdev/usehooks";
import { Plus, X } from "lucide-react";
import type { ComponentProps } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
	RadioGroup,
	RadioGroupIndicator,
	RadioGroupItem,
} from "./ui/radio-group";

interface ICreateGoal extends ComponentProps<typeof Button> {}

export function CreateGoal(props: ICreateGoal) {
	const [open, setOpen] = useToggle(false);
	const { mutateAsync } = createGoal();
	const {
		handleSubmit,
		register,
		control,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<CreateGoalSchema>({
		resolver: zodResolver(createGoalSchema),
	});

	async function handleCreateGoal(data: CreateGoalSchema) {
		await mutateAsync(data, {
			onError(error) {
				toast.error(error.message);
			},
			onSuccess() {
				toast.success(`Meta "${data.title}" criada com sucesso.`);
			},
		});

		reset();

		setOpen(false);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button {...props}>
					<Plus className="size-4" />
					Cadastrar meta
				</Button>
			</DialogTrigger>
			<DialogContent>
				<div className="flex flex-col gap-6 h-full">
					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-between">
							<DialogTitle>Cadastrar meta</DialogTitle>
							<DialogClose>
								<X className="size-5 text-zinc-600" />
							</DialogClose>
						</div>
						<DialogDescription>
							Adicione atividades que te fazem bem e que você quer continuar
							praticando toda semana.
						</DialogDescription>
					</div>
					<form
						onSubmit={handleSubmit(handleCreateGoal)}
						className={cn(
							"flex-1 flex flex-col justify-between gap-6 overflow-auto",
							"scroll-smooth scrollbar-thin scrollbar-track-secondary-900 scrollbar-thumb-primary-500 scrollbar-thumb-rounded-full",
						)}
					>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<Label htmlFor="title">Qual a atividade?</Label>
								<Input
									id="title"
									autoFocus
									placeholder="Praticar exercícios, meditar, etc..."
									{...register("title")}
								/>
								{errors.title && (
									<p className="text-sm text-red-400">{errors.title.message}</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<Label htmlFor="desiredWeeklyFrequency">
									Quantas vezes na semana?
								</Label>
								<Controller
									control={control}
									name="desiredWeeklyFrequency"
									defaultValue={5}
									render={({ field }) => {
										return (
											<RadioGroup
												value={String(field.value)}
												onValueChange={field.onChange}
											>
												{Array.from({ length: 7 }).map((_, index) => {
													const frequency = String(index + 1);

													return (
														<RadioGroupItem key={frequency} value={frequency}>
															<RadioGroupIndicator />
															<span className="text-zinc-300 text-sm font-medium leading-none">
																{frequency}x na semana
															</span>
															<span className="text-lg leading-none">🥱</span>
														</RadioGroupItem>
													);
												})}
											</RadioGroup>
										);
									}}
								/>
							</div>
						</div>
						<div className="flex items-center gap-3 mt-auto">
							<DialogClose asChild>
								<Button type="button" variant="secondary" className="flex-1">
									Fechar
								</Button>
							</DialogClose>
							<Button type="submit" disabled={isSubmitting} className="flex-1">
								Salvar
							</Button>
						</div>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
