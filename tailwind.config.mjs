import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const fontFeatureSettings = [
	"cv11",
	"cv12",
	"cv13",
	"salt",
	"ss01",
	"ss03",
	"tnum",
	"dlig",
	"calt",
	// "zero",
];

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			"shade-base": colors.gray[800],
			"shade-dimmed": colors.gray[400],
			"shade-highlight": colors.gray[800],
		},
		extend: {
			fontFamily: {
				sans: [
					["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
					{
						fontFeatureSettings: fontFeatureSettings
							.map((feature) => `"${feature}"`)
							.join(", "),
						fontVariationSettings: '"opsz" 32',
					},
				],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
