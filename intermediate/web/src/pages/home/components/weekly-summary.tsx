import { CreateGoal } from "@/components/create-goal";
import { Progress, ProgressIndicator } from "@/components/ui/progress-bar";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/functions/format-date";
import type { WeekSummary } from "@/types/week-summary";
import { endOfWeek, startOfWeek } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import { PendingGoals } from "./pending-goals";

interface IWeeklySummary {
	summary: WeekSummary;
}

export function WeeklySummary({ summary }: IWeeklySummary) {
	const currentDate = new Date();
	const firstDayWeek = formatDate(startOfWeek(currentDate), "d MMM");
	const lastDayOfWeek = formatDate(endOfWeek(currentDate), "d MMM");
	const completedPercentage = Math.round(
		(summary.completed * 100) / summary.total,
	);

	return (
		<main className="max-w-[540px] py-10 px-5 mx-auto flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img src="/svgs/in-orbit-icon.svg" alt="in.orbit" />
					<span className="text-lg font-semibold">
						{firstDayWeek} a {lastDayOfWeek}
					</span>
				</div>
				<CreateGoal type="button" size="sm" />
			</div>
			<div className="flex flex-col gap-3">
				<Progress value={8} max={15}>
					<ProgressIndicator style={{ width: `${completedPercentage}%` }} />
				</Progress>
				<div className="flex items-center justify-between text-xs text-secondary-400">
					<span>
						Você completou{" "}
						<span className="text-secondary-100">{summary.completed}</span> de{" "}
						<span className="text-secondary-100">{summary.total}</span> metas
						nessa semana.
					</span>
					<span>{completedPercentage}%</span>
				</div>
			</div>
			<Separator />
			<PendingGoals />
			<div className="flex flex-col gap-6">
				<h2 className="text-xl font-medium">Sua semana</h2>
				{summary.goalsPerDay &&
					Object.entries(summary.goalsPerDay).map(([key, value]) => {
						const weekDay = formatDate(key, "eeee");
						const formattedDate = formatDate(key, "d 'de' MMMM");

						return (
							<div key={key} className="flex flex-col gap-4">
								<h3 className="font-medium">
									<span className="capitalize">{weekDay}</span>{" "}
									<span className="text-secondary-400 text-xs">
										({formattedDate})
									</span>
								</h3>
								<ul className="flex flex-col gap-3">
									{value.map((goal) => {
										const time = formatDate(goal.completedAt, "HH:mm");

										return (
											<li key={goal.id} className="flex items-center gap-2">
												<CheckCircle2 className="size-4 text-tertiary-500" />
												<span className="text-sm text-secondary-400">
													Você completou "
													<span className="text-secondary-100">
														{goal.title}
													</span>
													" às{" "}
													<span className="text-secondary-100">{time}</span>
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
			</div>
		</main>
	);
}
