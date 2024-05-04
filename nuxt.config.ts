// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["@/assets/scss/app.scss"],
	postcss: {
		plugins: {
			autoprefixer: true,
		},
	},
	modules: [
		"nuxt-icon", //https://nuxt.com/modules/icon
		"@nuxtjs/i18n", //https://nuxt.com/modules/i18n
	],
	i18n: {
		langDir: "locales",
		locales: [
			{
				code: "tw",
				iso: "tw",
				file: "tw.json",
			},
			{
				code: "und-hani",
				iso: "und-hani",
				file: "und-hani.json",
			},
		],
		defaultLocale: "tw",
		detectBrowserLanguage: {
			redirectOn:'no prefix'
		},
		strategy:'prefix'
	},
});
