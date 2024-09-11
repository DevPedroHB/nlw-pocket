import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import {
	type ZodTypeProvider,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import type { AddressInfo } from "node:net";
import { createGoalCompletionController } from "./controller/create-goal-completion-controller";
import { createGoalController } from "./controller/create-goal-controller";
import { getWeekPendingGoalsController } from "./controller/get-week-pending-goals-controller";
import { getWeekSummaryController } from "./controller/get-week-summary-controller";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalController);
app.register(getWeekPendingGoalsController);
app.register(createGoalCompletionController);
app.register(getWeekSummaryController);

app
	.listen({
		port: 3333,
		host: "0.0.0.0",
	})
	.then(() => {
		const { port } = app.server.address() as AddressInfo;

		console.log(`🚀 HTTP server listening on port ${port}`);
	});
