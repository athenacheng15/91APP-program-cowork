/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	purge: [],
	theme: {
		screens: {
			L: "768px",
			// => @media (min-width: 768px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
