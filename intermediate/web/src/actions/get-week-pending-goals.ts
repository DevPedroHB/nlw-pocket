import { api } from "@/libs/ky";
import type { PendingGoals } from "@/types/pending-goals";
import { useQuery } from "@tanstack/react-query";

interface GetWeekPendingGoalsResponse {
	pendingGoals: PendingGoals[];
}

export function getWeekPendingGoals() {
	const query = useQuery({
		queryKey: ["pending-goals"],
		queryFn: async () => {
			try {
				const result = await api
					.get("pending-goals")
					.json<GetWeekPendingGoalsResponse>();

				return result;
			} catch (error) {
				console.log(error);

				throw new Error("Falha ao obter metas pendentes.");
			}
		},
	});

	return query;
}
