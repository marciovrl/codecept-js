# codeceptJS simple example

## About

This project is to demonstrate a simple example of using the CodeceptJS.

**Notes:** The Facebook site is being used for the tests.

-   [About](#About)
-   [Preconditions](#Preconditions)
-   [Local environment](#Local-environment)
    -   [Configuration](#Configuration)
    -   [Getting started](#Getting-started)
    -   [Install dependencies](#Install-dependencies)
    -   [Commands for running the tests](#Commands-for-running-the-tests)
-   [Report](#Report)
-   [Links](#Links)

## Preconditions

-   [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

-   Clone the project:
    `git clone https://github.com/marciovrl/codecept-js.git`

## Local environment

### Configuration

-   [Install node](https://www.techgalery.com/2019/12/how-to-install-nodejs-and-npm-on.html)

-   [Install NPM](https://www.techgalery.com/2019/12/how-to-install-nodejs-and-npm-on.html)

-   Install [Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB)

### Getting started

-   Install dependencies: `npm install`

### Commands for running the tests

-   Open CodeceptJS console: `npm run codeceptjs:ui`
-   Run tests on chrome: `npm run codeceptjs:headless`
-   Run tests on chrome headless: `npm run codeceptjs:headless`
-   Run tests on chrome headless and generate HTML report after running: `npm run codeceptjs:reporter`
-   Run lint: `npx prettier --write .`

## Report

### Local report

After running the tests a report in HTML is automatically generated and stored in `output/mochawesome.html`.

## Links

### CodeceptJS Documentation

Important support material for new implementations. Read more about this beautiful framework [here](https://codecept.io/quickstart/)
