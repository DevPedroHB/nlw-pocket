import type { Goal } from "@/types/goal";
import { select } from "@inquirer/prompts";

export async function completedGoals(goals: Goal[]) {
	const completed = goals.filter((goal) => goal.checked);

	if (completed.length === 0) {
		return "Nenhuma meta realizada! :(";
	}

	await select({
		message: `Metas Realizadas: ${completed.length}`,
		choices: completed.map((goal) => ({ name: goal.value, value: goal.value })),
	});

	return "";
}
