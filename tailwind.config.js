/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: '#a3ff12',
				background: '#0c0c0c',
				card: '#161616',
				grayText: '#888888',
			},
			fontFamily: {
				sans: ['Outfit', 'sans-serif'],
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}
