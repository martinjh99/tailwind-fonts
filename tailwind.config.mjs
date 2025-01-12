/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			fontFamily:{
				/* creates new font classes to use - font-alex and font-aleg  Still wont apply for some reason*/
				aleg:['Alegreya','serif'],
				alex:['Alex Brush','cursive']
			}
		},
	};
	plugins: []