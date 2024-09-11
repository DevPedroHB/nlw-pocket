import type { Goal } from "@/types/goal";
import fs from "node:fs/promises";

export async function saveGoals(goals: Goal[]) {
	await fs.writeFile("db/goals.json", JSON.stringify(goals, null, 2));
}
