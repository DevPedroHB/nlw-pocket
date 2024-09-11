import type { Goal } from "@/types/goal";
import { checkbox } from "@inquirer/prompts";

export async function listGoals(goals: Goal[]) {
	if (goals.length === 0) {
		return {
			goals,
			message: "Não há metas!",
		};
	}

	const responses = await checkbox({
		message:
			"Use as setas para navegar, espaço para marcar/desmarcar, e Enter para finalizar a seleção",
		choices: goals,
		instructions: false,
	});

	const newGoals = goals.map((goal) => ({
		...goal,
		checked: responses.includes(goal.value),
	}));

	return {
		goals: newGoals,
		message: "Meta(s) marcada(s) como concluída(s)!",
	};
}
