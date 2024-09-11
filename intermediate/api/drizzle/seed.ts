import dayjs from "dayjs";
import { client, db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
	await db.delete(goalCompletions);
	await db.delete(goals);

	const result = await db
		.insert(goals)
		.values([
			{ title: "Acordar cedo", desiredWeeklyFrequency: 5 },
			{ title: "Me exercitar", desiredWeeklyFrequency: 3 },
			{ title: "Meditar", desiredWeeklyFrequency: 1 },
			{ title: "Ler um livro", desiredWeeklyFrequency: 2 },
			{ title: "Aprender algo novo", desiredWeeklyFrequency: 4 },
			{ title: "Caminhar ao ar livre", desiredWeeklyFrequency: 3 },
		])
		.returning();

	const startOfWeek = dayjs().startOf("week");

	await db.insert(goalCompletions).values([
		{ goalId: result[0].id, createdAt: startOfWeek.toDate() },
		{ goalId: result[1].id, createdAt: startOfWeek.add(1, "day").toDate() },
		{ goalId: result[2].id, createdAt: startOfWeek.add(2, "day").toDate() },
		{ goalId: result[3].id, createdAt: startOfWeek.add(3, "day").toDate() },
		{ goalId: result[4].id, createdAt: startOfWeek.add(4, "day").toDate() },
		{ goalId: result[5].id, createdAt: startOfWeek.add(5, "day").toDate() },
	]);

	console.log("Seed completed successfully.");
}

seed().finally(() => {
	client.end();
});
