import { createGoalCompletionUseCase } from "@/use-cases/create-goal-completion";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const createGoalCompletionController: FastifyPluginAsyncZod = async (
	app,
) => {
	app.post(
		"/completions",
		{
			schema: {
				body: z.object({
					goalId: z.string(),
				}),
			},
		},
		async (request, reply) => {
			const { goalId } = request.body;

			const { goalCompletion } = await createGoalCompletionUseCase({
				goalId,
			});

			reply.status(201).send({
				id: goalCompletion.id,
			});
		},
	);
};
