/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'layout': '120px 1fr 120px'
			}
		},
		colors: {
			'dark-cyan': '#5ba4a4',
			'light-grayish-cyan-bg': '#effafa',
			'light-grayish-cyan-ft': '#eef6f6',
			'dark-grayish-cyan': '	#7b8e8e',
			'very-dark-grayish-cyan': '#2c3a3a'
		}
	},
	plugins: [],
}
