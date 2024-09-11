import type { Goal } from "@/types/goal";
import { select } from "@inquirer/prompts";

export async function openGoals(goals: Goal[]) {
	const open = goals.filter((goal) => !goal.checked);

	if (open.length === 0) {
		return "Não há metas abertas! :)";
	}

	await select({
		message: `Metas Abertas: ${open.length}`,
		choices: open.map((goal) => ({ name: goal.value, value: goal.value })),
	});

	return "";
}
