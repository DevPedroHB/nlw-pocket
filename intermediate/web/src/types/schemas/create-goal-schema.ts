import { z } from "zod";

export const createGoalSchema = z.object({
	title: z.string().min(1, "Informe a atividade que deseja praticar."),
	desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
});

export type CreateGoalSchema = z.infer<typeof createGoalSchema>;
