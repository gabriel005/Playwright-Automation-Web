const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { ProductPage } = require("../../pages/ProductPage");
const { LoginPage } = require("../../pages/LoginPage");
const { BuyPage } = require("../../pages/BuyPage");
const { Checkout } = require("../../pages/Checkout");

Given("que eu estou na página de checkout", async function () {
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

When("clico no botão de Continue", async function () {
  await this.checkoutPage.clickContinue();
});

When("preencho todos os dados", async function () {
  await this.checkoutPage.form(); // Fazer o login com as credenciais fornecidas
});

When("clico no botão de Finish", async function () {
  await this.checkoutPage.clickFinish();
});

Then("eu devo ver a mensagem no formulario de erro {string}",  async function (errorMessage) {
  expect("Error: First Name is required").toBe(errorMessage);
});

Then("eu devo ver a mensagem de sucesso {string}",  async function (feedbackMessage) {
  expect("Thank you for your order!").toBe(feedbackMessage);
});
