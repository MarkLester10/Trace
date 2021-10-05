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
				gray: {
					light: '#F3F4F6',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
