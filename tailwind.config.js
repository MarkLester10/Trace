module.exports = {
	purge: {
		// enabled: true,
		// content: ["./public/**/*.html"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					light: '#EFF6FF',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
