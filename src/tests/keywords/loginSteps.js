const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');


Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page); // Creates a page object
  await this.loginPage.navigate(); // Navigate to the login page
});

When('I attempt to log in with the username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password); // Log in with the provided credentials
});

Then('I should see the error message {string}', async function (errorMessage) {
  const actualErrorMessage = await this.loginPage.getErrorMessage(); // Get the error message
  expect(actualErrorMessage).toContain(errorMessage); // Verify if the error message is correct
  //await page.pause(); // This will pause the browser, allowing inspection
});

Then('I should be redirected to the home screen', async function () {
  this.productPage = new ProductPage(this.page);
  const cardVisible = await this.productPage.cardList();
  expect(cardVisible).toBeTruthy(); // Verify if the card is visible
});

Then('I should see the blocked message {string}', async function (blockMessage) {  // blockMessage contains the value of {string}
  expect('Epic sadface: Sorry, this user has been locked out.').toBe(blockMessage);
});