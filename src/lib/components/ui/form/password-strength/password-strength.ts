export function passwordAttrs(password: string) {
	const attrs = {
		lenght: password.length >= 8,
		lowerCase: /[a-z]/g.test(password),
		upperCase: /[A-Z]/g.test(password),
		special: /\W/g.test(password),
		number: /\d/g.test(password)
	};
	return {
		attrs,
		valid: Object.values(attrs).every(Boolean)
	};
}

export function passwordStrength(password: string) {
	const { attrs } = passwordAttrs(password);
	const additionStrength = {
		...attrs,
		long: password.length > 16
	};

	const strength = Object.values(additionStrength).reduce((prev, curr) => prev + +curr, 0);

	return {
		attrs,
		strength: strength / Object.keys(additionStrength).length
	};
}
