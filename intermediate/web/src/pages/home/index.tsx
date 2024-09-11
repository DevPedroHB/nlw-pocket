import { getWeekSummary } from "@/actions/get-week-summary";
import { CreateGoal } from "@/components/create-goal";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { WeeklySummary } from "./components/weekly-summary";

export function Home() {
	const { data, error, isLoading } = getWeekSummary();

	if (error) {
		toast.error(error.message);
	}

	if (isLoading || !data) {
		return (
			<main className="h-screen flex items-center justify-center">
				<Loader2 className="text-zinc-500 animate-spin size-10" />
			</main>
		);
	}

	if (data.summary.total > 0) {
		return <WeeklySummary summary={data.summary} />;
	}

	return (
		<main className="h-screen flex flex-col items-center justify-center gap-8">
			<img src="/svgs/in-orbit-logo.svg" alt="in.orbit" />
			<img
				src="/svgs/rocket-launch-illustration.svg"
				alt="Ilustração de uma mulher controlando um lançamento de um foguete através de um controle remoto"
			/>
			<p className="text-zinc-300 leading-relaxed max-w-80 text-center">
				Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
				mesmo?
			</p>
			<CreateGoal type="button" />
		</main>
	);
}
