import { db } from "drizzle";
import { goals } from "drizzle/schema";

interface CreateGoalUseCaseRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoalUseCase({
	title,
	desiredWeeklyFrequency,
}: CreateGoalUseCaseRequest) {
	const result = await db
		.insert(goals)
		.values({
			title,
			desiredWeeklyFrequency,
		})
		.returning();

	const goal = result[0];

	return {
		goal,
	};
}
