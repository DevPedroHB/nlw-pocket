import { select } from "@inquirer/prompts";
import type { Goal } from "./types/goal";
import { completedGoals } from "./use-cases/completed-goals";
import { deleteGoals } from "./use-cases/delete-goals";
import { listGoals } from "./use-cases/list-goals";
import { loadGoals } from "./use-cases/load-goals";
import { openGoals } from "./use-cases/open-goals";
import { registerGoal } from "./use-cases/register-goal";
import { saveGoals } from "./use-cases/save-goals";
import { showMessage } from "./use-cases/show-message";

let message = "Bem-vindo ao App de Metas";
let goals: Goal[] = [];

async function start() {
	goals = await loadGoals();

	while (true) {
		showMessage(message);

		await saveGoals(goals);

		const option = await select({
			message: "Menu >",
			choices: [
				{ name: "Cadastrar meta", value: "register" },
				{ name: "Listar metas", value: "list" },
				{ name: "Metas realizadas", value: "completed" },
				{ name: "Metas abertas", value: "open" },
				{ name: "Deletar metas", value: "delete" },
				{ name: "Sair", value: "exit" },
			],
		});

		switch (option) {
			case "register": {
				const registerResult = await registerGoal(goals);

				goals = registerResult.goals;
				message = registerResult.message;

				break;
			}
			case "list": {
				const listResult = await listGoals(goals);

				goals = listResult.goals;
				message = listResult.message;

				break;
			}
			case "completed":
				message = await completedGoals(goals);

				break;
			case "open":
				message = await openGoals(goals);

				break;
			case "delete": {
				const deleteResult = await deleteGoals(goals);

				goals = deleteResult.goals;
				message = deleteResult.message;

				break;
			}
			case "exit":
				console.log("Até a próxima!");

				return;
		}
	}
}

start();
