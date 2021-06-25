const { I } = inject();

module.exports = {
	// setting locators
	fields: {
		email: '[data-testid="royal_email"]',
		password: '[data-testid="royal_pass"]',
		loginButton: '[data-testid="royal_login_button"]',
	},
};
