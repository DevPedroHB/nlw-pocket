import { api } from "@/libs/ky";
import { queryClient } from "@/libs/react-query";
import { useMutation } from "@tanstack/react-query";

interface ICreateGoalCompletionResponse {
	id: string;
}

export function createGoalCompletion() {
	const mutation = useMutation({
		mutationKey: ["create-goal-completion"],
		mutationFn: async (goalId: string) => {
			try {
				const result = await api
					.post("completions", {
						json: {
							goalId,
						},
					})
					.json<ICreateGoalCompletionResponse>();

				return result;
			} catch (error) {
				console.log(error);

				throw new Error("Falha ao criar conclusão de meta.");
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["week-summary"] });
			queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
		},
	});

	return mutation;
}
