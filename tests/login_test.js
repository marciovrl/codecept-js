const config = require('config');

Feature('login');

Before(({ I }) => {
	I.amOnPage('/');
});

Scenario('must to do login in successfully', ({ I, loginPage }) => {
	I.fillField(loginPage.fields.email, config.get('user'));
	I.fillField(loginPage.fields.password, config.get('password'));
	I.click(loginPage.fields.loginButton);
	I.seeInTitle('Facebook');
	I.see('Menu do Facebook');
});

Scenario('must not to do login in successfully', ({ I, loginPage }) => {
	I.fillField(loginPage.fields.email, config.get('user'));
	I.fillField(loginPage.fields.password, 'fakepasswd');
	I.click(loginPage.fields.loginButton);
	I.seeInTitle('Facebook');
	I.dontSee('Menu do Facebook');
});
