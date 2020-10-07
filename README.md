![Cypress Logo](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)
# ProtoCommerce
#### Version 1.0.0

## Description
#### ProtoCommerce is used for testing some different functionalities. There are 12 tests in this project.
* ProtoCommerceTest contains 6 tests:
    * Visit the https://rahulshettyacademy.com/angularpractice/ 
    * Successful filling the form
    * Whether the same input value is in the next fields "Name" and "Two-way Data Binding example"
    * Whether Entrepreneur radio button is disabled
    * Whether the input field has a value of minlength 2
    * Page title

* ShopTest contains 7 tests:
    * Go to shop
    * Adding Blackberry to cart
    * Select Product
    * Verify whether Nokia Edge is in the cart
    * Remove product from cart
    * Remove product from cart and Continue Shoping
    * Adding multiple products to the cart

#### Target application URL is: https://rahulshettyacademy.com/angularpractice/
---
#### Target browser: Chrome, Chromium, Firefox, Electron
#### Chrome version: 83.0.4103.61 (Official build)(64-bit)
#### Chromium version: 83.0.4103.116 
#### Firefox version: 68.12.Oesr(64-bit)
#### Electron version: 8.3.0(64-bit)

## Help
---

#### The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#Running-tests "Cypress documentation")

## Install Cypress

[Follow these instructions to install Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements "Installing Cypress")

## Opening Cypress

`node_modules/.bin/cypress open`
## This `project` contains the following:
* cypress
* node_modules
* cypress.json
* package.json
* package-lock.json

## Package `Cypress` contains 6 folders:
* fixtures
* integration
* plugins
* screenshots
* support
* videos   

## Folder `Integration` contains:
* examples folder
    * ProtoCommerceTest.js
    * ShopTest.js

## Folder `Support` contains:
* pageObjects folder
    * HomePage.js
    * ShopPage.js

## Running tests from Terminal

`npm run test`

## Cypress `Dashboard`
[Cypress Dashboard](https://dashboard.cypress.io/projects/fam1np/runs/2/specs)

## Cypress `Video`
[Cypress Video ProtoCommerceTest](https://dashboard.cypress.io/projects/fam1np/runs/2/specs/08692aef-6c9d-4a07-8cf9-6cd4562be611/video)

[Cypress Video ShopTest](https://dashboard.cypress.io/projects/fam1np/runs/2/specs/f898165f-69a0-4150-95fe-86c3be1dd942/video)

