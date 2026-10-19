import { DownloadSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { DOWNLOAD_URL, GITHUB_REPO_URL, YOUTUBE_VIDEO_ID } from "#/lib/links";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main className="flex flex-1 flex-col items-center">
			<section className="w-full max-w-6xl px-6 pt-12 pb-16 sm:pt-16">
				<div className="relative aspect-video w-full overflow-hidden border border-border bg-muted">
					<iframe
						className="absolute inset-0 h-full w-full"
						src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
						title="AULA F75 Mac Driver demo: RGB lighting, macros and customisation on macOS"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</section>

			<section className="flex w-full max-w-3xl flex-col items-center gap-8 px-6 pb-24 text-center">
				<div className="flex flex-col items-center gap-4">
					<p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
						AULA F75 Mac Driver
					</p>
					<h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
						Your AULA F75, finally at home on the Mac.
					</h1>
					<p className="max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
						The vendor app only runs on Windows, so I built one for macOS. Live
						lighting, a music visualiser that reacts to whatever your Mac is
						playing, macros that type for you anywhere, and keyboard settings,
						over the USB cable or the 2.4 GHz dongle. Free and open source.
					</p>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Button
						asChild
						size="lg"
						variant="outline"
						className="h-11 px-5 text-sm"
					>
						<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
							<GithubLogoIcon aria-hidden="true" />
							View on GitHub
						</a>
					</Button>
					<Button asChild size="lg" className="h-11 px-5 text-sm">
						<a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
							<DownloadSimpleIcon aria-hidden="true" />
							Download now
						</a>
					</Button>
				</div>
				<p className="text-xs text-muted-foreground">
					Requires macOS 13 Ventura or later.
				</p>
			</section>
		</main>
	);
}
