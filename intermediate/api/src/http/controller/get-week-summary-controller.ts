import { getWeekSummaryUseCase } from "@/use-cases/get-week-summary";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const getWeekSummaryController: FastifyPluginAsyncZod = async (app) => {
	app.get("/summary", async (_, reply) => {
		const { summary } = await getWeekSummaryUseCase();

		return reply.status(200).send({
			summary,
		});
	});
};
