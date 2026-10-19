import { useGetCounts } from "@itzadetunji/counter";
import { AUTHOR_WEB_URL, COUNTER_APP_ID } from "#/lib/links";

function VisitCount() {
	const { data } = useGetCounts({ appId: COUNTER_APP_ID });

	if (!data) return null;
	return (
		<span className="text-xs text-muted-foreground tabular-nums">
			{data.totalVisits.toLocaleString()} visits
		</span>
	);
}

export default function Footer() {
	return (
		<footer className="w-full border-t border-border">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-6 py-6">
				<p className="text-sm text-muted-foreground">
					Built by{" "}
					<a
						href={AUTHOR_WEB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-foreground underline decoration-foreground underline-offset-[3px] transition-opacity hover:opacity-70"
					>
						Adetunji
					</a>{" "}
					❤️
				</p>
				<VisitCount />
			</div>
		</footer>
	);
}
