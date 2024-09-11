import { api } from "@/libs/ky";
import type { WeekSummary } from "@/types/week-summary";
import { useQuery } from "@tanstack/react-query";

interface GetWeekSummaryResponse {
	summary: WeekSummary;
}

export function getWeekSummary() {
	const query = useQuery({
		queryKey: ["week-summary"],
		queryFn: async () => {
			try {
				const result = await api.get("summary").json<GetWeekSummaryResponse>();

				return result;
			} catch (error) {
				console.log(error);

				throw new Error("Falha ao obter o resumo da semana.");
			}
		},
	});

	return query;
}
