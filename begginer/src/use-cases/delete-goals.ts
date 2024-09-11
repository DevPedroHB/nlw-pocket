import type { Goal } from "@/types/goal";
import { checkbox } from "@inquirer/prompts";

export async function deleteGoals(goals: Goal[]) {
	if (goals.length === 0) {
		return {
			goals,
			message: "Não há metas!",
		};
	}

	const responses = await checkbox({
		message: "Selecione as metas para deletar",
		choices: goals.map((goal) => ({ name: goal.value, value: goal.value })),
		instructions: false,
	});

	const newGoals = goals.filter((goal) => !responses.includes(goal.value));

	return {
		goals: newGoals,
		message: "Meta(s) deletada(s) com sucesso!",
	};
}
