import type { Goal } from "@/types/goal";
import fs from "node:fs/promises";

export async function loadGoals(): Promise<Goal[]> {
	try {
		const data = await fs.readFile("db/goals.json", "utf-8");

		return JSON.parse(data);
	} catch (error) {
		return [];
	}
}
