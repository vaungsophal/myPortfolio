/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: '#ADFF2F',
				secondary: '#8B5CF6',
				background: '#1c1714',
				card: '#251f1b',
				grayText: '#888888',
			},
			fontFamily: {
				sans: ['"Google Sans"', 'Outfit', 'sans-serif'],
				pixel: ['"Press Start 2P"', 'cursive'],
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}
