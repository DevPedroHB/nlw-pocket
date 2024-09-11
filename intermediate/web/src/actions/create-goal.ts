import { api } from "@/libs/ky";
import { queryClient } from "@/libs/react-query";
import type { CreateGoalSchema } from "@/types/schemas/create-goal-schema";
import { useMutation } from "@tanstack/react-query";

interface ICreateGoalResponse {
	id: string;
}

export function createGoal() {
	const mutation = useMutation({
		mutationKey: ["create-goal"],
		mutationFn: async (goal: CreateGoalSchema) => {
			try {
				const result = await api
					.post("goals", {
						json: goal,
					})
					.json<ICreateGoalResponse>();

				return result;
			} catch (error) {
				console.log(error);

				throw new Error("Falha ao criar a meta.");
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["week-summary"] });
			queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
		},
	});

	return mutation;
}
