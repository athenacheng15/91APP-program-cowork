/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			"med": "768px"
		}	  
	},
	plugins: [],
	mode: "jit",
};
  