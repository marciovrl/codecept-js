const config = require('config');

Feature('login');

Before(({ I }) => {
	I.amOnPage('/');
});

Scenario('must to do login in successfully', ({ I, loginPage }) => {
	loginPage.login(config.get('user'), config.get('password'))
	I.seeInTitle('Facebook');
	I.see('Menu do Facebook');
});

Scenario('must not to do login in successfully', ({ I, loginPage }) => {
	const passwd = 'fakepasswd'
	loginPage.login(config.get('user'), passwd)
	I.seeInTitle('Facebook');
	I.dontSee('Menu do Facebook');
});
