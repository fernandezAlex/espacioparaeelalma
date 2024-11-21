/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#DEB3CE", // Main variable color
				secondary: "#ff7d7f",
				light: "#f3f5f8",
				dark: "#212529",
			},
			fontFamily: {
				serif: ["PT Serif", "serif"],
				sans: ["Open Sans", "Verdana", "Helvetica", "sans-serif"],
			},
			boxShadow: {
				soft: "3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa",
				inset: "inset 3px 3px 3px #cdcdcd, inset -3px -3px 3px #fafafa",
			},
			borderRadius: {
				xl: "2rem",
				"2xl": "3rem",
			},
			backgroundImage: {
				"hero-pattern": 'url("/hero-main-photo.webp")', // Main background image
			},
		},
	},
	plugins: [],
};
