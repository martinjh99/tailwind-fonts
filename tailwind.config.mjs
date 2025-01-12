/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			fontFamily:{
				/* robotoslab:["Roboto Slab",'serif'] */
				aleg:['Alegreya','serif'],
				alex:['Alex Brush','cursive']
			}
		},
	};
	plugins: []