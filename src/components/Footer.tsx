import { AUTHOR_GITHUB_URL } from "#/lib/links";

export default function Footer() {
	return (
		<footer className="w-full border-t border-border">
			<div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-6">
				<p className="text-sm text-muted-foreground">
					Built by{" "}
					<a
						href={AUTHOR_GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-foreground underline decoration-foreground underline-offset-[3px] transition-opacity hover:opacity-70"
					>
						Adetunji
					</a>{" "}
					❤️
				</p>
			</div>
		</footer>
	);
}
