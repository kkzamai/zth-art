export function portuguesePluralRules(choice) {
	const name = new Intl.PluralRules('pt').select(choice)
	return { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }[name]
}