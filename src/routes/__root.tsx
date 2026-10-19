import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "#/components/Footer";
import Header from "#/components/Header";
import appCss from "#/styles.css?url";

const TITLE = "AULA F75 Mac Driver";
const DESCRIPTION =
	"Customise the AULA F75 keyboard on macOS: lighting, music visualiser, macros and keyboard settings, without the Windows-only vendor app.";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#000000" },
			{ title: TITLE },
			{ name: "description", content: DESCRIPTION },
			{ property: "og:title", content: TITLE },
			{ property: "og:description", content: DESCRIPTION },
			{ property: "og:image", content: "/logo.png" },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: TITLE },
			{ name: "twitter:description", content: DESCRIPTION },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/png", href: "/logo.png" },
			{ rel: "apple-touch-icon", href: "/logo.png" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
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
