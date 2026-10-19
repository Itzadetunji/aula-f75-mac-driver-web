import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { DOWNLOAD_URL } from "#/lib/links";

export default function Header() {
	return (
		<header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
				<Link
					to="/"
					className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
				>
					<img src="/logo.png" alt="AULA F75 Mac Driver" className="h-9 w-9" />
					<span>AULA F75</span>
				</Link>
				<Button asChild size="lg">
					<a
						href={DOWNLOAD_URL}
						target="_blank"
						rel="noopener noreferrer"
						title="Download AULA F75 Mac Driver from GitHub"
					>
						<DownloadSimpleIcon aria-hidden="true" />
						Download
					</a>
				</Button>
			</div>
		</header>
	);
}
