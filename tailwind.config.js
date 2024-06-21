/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: { Comissioner: "Commissioner, sans-serif" },
			colors: {
				Background: "hsl(0, 0%, 96%)",
				ButtonBackground: " hsl(176, 50%, 47%)",
				ButtonHover: " hsl(176, 72%, 28%)",
			},
		},
	},
	plugins: [],
};
