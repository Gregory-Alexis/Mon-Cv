module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			letterSpacing: {
				widest: ".25em",
			},
			textColor: {
				darkBlue: "#00b6bf",
			},
			gridTemplateColumns: {
				main: "repeat(2, minmax(1fr, 3fr))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
