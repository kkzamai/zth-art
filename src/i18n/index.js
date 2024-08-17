import { createI18n } from "vue-i18n";
import en from "./locales/en.json"
import pt from "./locales/pt.json"
import numberFormats from "./rules/numbers.js"
import datetimeFormats from "./rules/datetime.js"
import { portuguesePluralRules } from './rules/plurals'

export default createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en,
		pt
	},
	numberFormats,
	datetimeFormats,
	pluralizationRules: {
		pt: portuguesePluralRules,
	},
})