import { useCounter } from "@itzadetunji/counter";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "#/components/Footer";
import Header from "#/components/Header";
import { COUNTER_APP_ID } from "#/lib/links";
import {
	OG_IMAGE,
	SEO_DESCRIPTION,
	SEO_KEYWORDS,
	SEO_TITLE,
	SITE_NAME,
	SITE_URL,
	STRUCTURED_DATA,
} from "#/lib/seo";
import appCss from "#/styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#000000" },
			{ title: SEO_TITLE },
			{ name: "description", content: SEO_DESCRIPTION },
			{ name: "keywords", content: SEO_KEYWORDS.join(", ") },
			{ name: "author", content: "Adetunji Adeyinka" },
			{ name: "application-name", content: SITE_NAME },
			{ name: "apple-mobile-web-app-title", content: "AULA F75" },
			{
				name: "robots",
				content:
					"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
			},
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: SITE_NAME },
			{ property: "og:locale", content: "en_GB" },
			{ property: "og:url", content: `${SITE_URL}/` },
			{ property: "og:title", content: SEO_TITLE },
			{ property: "og:description", content: SEO_DESCRIPTION },
			{ property: "og:image", content: OG_IMAGE.url },
			{ property: "og:image:width", content: String(OG_IMAGE.width) },
			{ property: "og:image:height", content: String(OG_IMAGE.height) },
			{ property: "og:image:alt", content: OG_IMAGE.alt },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: SEO_TITLE },
			{ name: "twitter:description", content: SEO_DESCRIPTION },
			{ name: "twitter:image", content: OG_IMAGE.url },
			{ name: "twitter:image:alt", content: OG_IMAGE.alt },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "canonical", href: `${SITE_URL}/` },
			{ rel: "icon", type: "image/png", sizes: "512x512", href: "/logo.png" },
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/icon-192.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{ rel: "manifest", href: "/manifest.webmanifest" },
			{ rel: "preconnect", href: "https://www.youtube-nocookie.com" },
			{ rel: "preconnect", href: "https://i.ytimg.com" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	useCounter({
		appId: COUNTER_APP_ID,
		singleVisit: true,
		enabled: import.meta.env.PROD,
	});

	return (
		<html lang="en">
			<head>
				<HeadContent />
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script
					dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
				/>
			</head>
			<body className="flex min-h-dvh flex-col font-sans antialiased">
				<Header />
				{children}
				<Footer />
				<Scripts />
			</body>
		</html>
	);
}
