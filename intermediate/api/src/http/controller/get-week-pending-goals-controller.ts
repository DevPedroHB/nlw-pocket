import { getWeekPendingGoalsUseCase } from "@/use-cases/get-week-pending-goals";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const getWeekPendingGoalsController: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get("/pending-goals", async (_, reply) => {
		const { pendingGoals } = await getWeekPendingGoalsUseCase();

		return reply.status(200).send({
			pendingGoals,
		});
	});
};
