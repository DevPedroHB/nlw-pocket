import type { Goal } from "@/types/goal";
import { input } from "@inquirer/prompts";

export async function registerGoal(goals: Goal[]) {
	const goal = await input({ message: "Digite a meta:" });

	if (goal.length === 0) {
		return {
			goals,
			message: "A meta não pode ser vazia.",
		};
	}

	goals.push({ value: goal, checked: false });

	return {
		goals,
		message: "Meta cadastrada com sucesso!",
	};
}
