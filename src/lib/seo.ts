import {
	AUTHOR_WEB_URL,
	DOWNLOAD_URL,
	GITHUB_REPO_URL,
	YOUTUBE_VIDEO_ID,
} from "#/lib/links";

export const SITE_URL = "https://aula-f75-itzadetunji.com";

export const SITE_NAME = "AULA F75 Mac Driver";

export const SEO_TITLE =
	"AULA F75 Mac Driver: RGB Lighting, Macros & Music Visualiser for macOS";

export const SEO_DESCRIPTION =
	"Free, open-source macOS driver for the AULA F75 keyboard. Control RGB lighting, per-key colours, a music visualiser, macros, sleep and debounce over USB or the 2.4 GHz dongle. No Windows app needed.";

export const SEO_KEYWORDS = [
	"AULA F75",
	"AULA F75 Mac",
	"AULA F75 macOS",
	"AULA F75 driver",
	"AULA F75 software",
	"AULA F75 RGB",
	"AULA keyboard Mac",
	"mechanical keyboard macOS driver",
	"keyboard RGB software Mac",
	"keyboard macros macOS",
	"music visualiser keyboard",
];

export const OG_IMAGE = {
	url: `${SITE_URL}/og-image.png`,
	width: 1200,
	height: 630,
	alt: "AULA F75 Mac Driver: customise your AULA F75 keyboard on macOS",
};

const AUTHOR = {
	"@type": "Person",
	name: "Adetunji Adeyinka",
	url: AUTHOR_WEB_URL,
	sameAs: [
		"https://github.com/Itzadetunji",
		"https://www.youtube.com/@itzadetunji",
	],
};

export const STRUCTURED_DATA = [
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
		description: SEO_DESCRIPTION,
		inLanguage: "en",
		author: AUTHOR,
	},
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: SITE_NAME,
		description: SEO_DESCRIPTION,
		url: SITE_URL,
		image: `${SITE_URL}/logo.png`,
		screenshot: OG_IMAGE.url,
		applicationCategory: "UtilitiesApplication",
		operatingSystem: "macOS 13 or later",
		downloadUrl: DOWNLOAD_URL,
		installUrl: DOWNLOAD_URL,
		codeRepository: GITHUB_REPO_URL,
		isAccessibleForFree: true,
		featureList: [
			"Live RGB lighting: static, breathing, spectrum, wave and per-key colours",
			"Music visualiser driven by Mac system audio",
			"Edit the lighting effects saved on the keyboard",
			"2.4 GHz dongle support for live lighting",
			"Global macros that type text anywhere on macOS",
			"Sleep timer and debounce settings",
			"Menu bar controls",
		],
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		author: AUTHOR,
	},
	{
		"@context": "https://schema.org",
		"@type": "VideoObject",
		name: "AULA F75 Mac Driver – RGB, Macros & Customization on macOS",
		description: SEO_DESCRIPTION,
		thumbnailUrl: [
			`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`,
			`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
		],
		uploadDate: "2026-10-18T07:20:20-07:00",
		duration: "PT1M8S",
		contentUrl: `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,
		embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
		author: AUTHOR,
	},
];
