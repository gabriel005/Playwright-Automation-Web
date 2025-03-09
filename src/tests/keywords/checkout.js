const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { ProductPage } = require("../../pages/ProductPage");
const { LoginPage } = require("../../pages/LoginPage");
const { BuyPage } = require("../../pages/BuyPage");
const { Checkout } = require("../../pages/Checkout");

Given("I am on the checkout page", async function () {
  this.loginPage = new LoginPage(this.page);
  this.productPage = new ProductPage(this.page);
  this.buyPage = new BuyPage(this.page);
  this.checkoutPage = new Checkout(this.page);

  await this.loginPage.navigate();
  await this.loginPage.login("standard_user", "secret_sauce");

  await this.buyPage.clickAdd();
  await this.buyPage.clickCart();
  await this.checkoutPage.clickCheckout();
});

When("I click the Continue button", async function () {
  await this.checkoutPage.clickContinue();
});

When("I fill in all the details", async function () {
  await this.checkoutPage.form(); // Log in with the provided credentials
});

When("I click the Finish button", async function () {
  await this.checkoutPage.clickFinish();
});

Then("I should see the error message in the form {string}",  async function (errorMessage) {
  expect("Error: First Name is required").toBe(errorMessage);
});

Then("I should see the success message {string}",  async function (feedbackMessage) {
  expect("Thank you for your order!").toBe(feedbackMessage);
});
