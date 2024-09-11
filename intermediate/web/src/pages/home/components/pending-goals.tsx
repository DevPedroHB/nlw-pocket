import { createGoalCompletion } from "@/actions/create-goal-completion";
import { getWeekPendingGoals } from "@/actions/get-week-pending-goals";
import { OutlineButton } from "@/components/ui/outline-button";
import type { PendingGoals as IPendingGoals } from "@/types/pending-goals";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

export function PendingGoals() {
	const { data, error, isLoading } = getWeekPendingGoals();
	const { mutateAsync } = createGoalCompletion();

	if (error) {
		toast.error(error.message);
	}

	if (isLoading || !data) {
		return (
			<div className="flex items-center justify-center">
				<Loader2 className="text-zinc-500 animate-spin size-10" />
			</div>
		);
	}

	async function handleCompleteGoal(goal: IPendingGoals) {
		await mutateAsync(goal.id, {
			onError(error) {
				toast.error(error.message);
			},
			onSuccess() {
				toast.success(`Parabéns você completou a meta "${goal.title}".`);
			},
		});
	}

	return (
		<div className="flex flex-wrap gap-3">
			{data.pendingGoals.map((goal) => {
				return (
					<OutlineButton
						key={goal.id}
						onClick={() => handleCompleteGoal(goal)}
						disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
					>
						<Plus className="size-4 text-secondary-600" />
						{goal.title}
					</OutlineButton>
				);
			})}
		</div>
	);
}
