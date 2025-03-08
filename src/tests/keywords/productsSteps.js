const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { ProductPage } = require("../../pages/ProductPage");
const { LoginPage } = require('../../pages/LoginPage');

Given('que eu estou na página de produtos', async function () {
  this.loginPage = new LoginPage(this.page); 
  await this.loginPage.navigate(); 
  await this.loginPage.login("standard_user", "secret_sauce");
  this.productPage = new ProductPage(this.page);
  await expect(this.page).toHaveTitle(/Swag Labs/);
});

When('clico para ordernar um produto por preço', async function () {
  await this.productPage.clickOrder(); 
});

When('clico para visualizar os detalhes de um produto', async function () {
  await this.productPage.clickDetails(); 
});

Then("eu devo ver a lista de produtos na pagina principal", async function () {
  this.productPage = new ProductPage(this.page); 
  const cardVisible = await this.productPage.cardList();
  expect(cardVisible).toBeTruthy(); 
  await expect(this.page).toHaveTitle(/Swag Labs/);
});

Then("eu devo ver os preços do menor pro maior", async function () {
  this.productPage = new ProductPage(this.page); 
  const prices = await this.productPage.cardPrices(); // Pega todos os preços  
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]); 
  }
});

Then("eu devo ver a pagina de detalhes do produto selecionado", async function () {
  await this.page.waitForSelector('#back-to-products', { state: 'visible' }); // Aguarda o botão aparecer
  await expect(this.page.locator('#back-to-products')).toBeVisible(); // Verifica se está visível
});