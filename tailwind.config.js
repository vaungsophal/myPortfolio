/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: '#3b82f6',
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
