const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
	tests: './tests/*_test.js',
	output: './output',
	helpers: {
		Playwright: {
			url: 'https://www.facebook.com',
			show: true,
			browser: 'chromium',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage.js',
	},
	bootstrap: null,
	mocha: {
		reporterOptions: {
			reportDir: 'output',
		},
	},
	name: 'codecept-js',
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		tryTo: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
		restart: true,
	},
};
