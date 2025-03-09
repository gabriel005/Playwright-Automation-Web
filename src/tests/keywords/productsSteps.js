const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { ProductPage } = require("../../pages/ProductPage");
const { LoginPage } = require('../../pages/LoginPage');
const { BuyPage } = require("../../pages/BuyPage");

Given('I am on the product page', async function () {
  this.loginPage = new LoginPage(this.page); 
  await this.loginPage.navigate(); 
  await this.loginPage.login("standard_user", "secret_sauce");
  this.productPage = new ProductPage(this.page);  
  this.buyPage = new BuyPage(this.page);
  await expect(this.page).toHaveTitle(/Swag Labs/);
});

When('I click to sort a product by price', async function () {
  await this.productPage.clickOrder(); 
});

When('I click to view the details of a product', async function () {
  await this.productPage.clickDetails(); 
});

Then("I should see the product list on the main page", async function () {
  this.productPage = new ProductPage(this.page); 
  const cardVisible = await this.productPage.cardList();
  expect(cardVisible).toBeTruthy(); 
  await expect(this.page).toHaveTitle(/Swag Labs/);
});

Then("I should see the prices from lowest to highest", async function () {
  this.productPage = new ProductPage(this.page); 
  const prices = await this.productPage.cardPrices(); // Get all prices    
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]); 
  }
});

Then("I should see the selected product's details page", async function () {
  await this.page.waitForSelector('#back-to-products', { state: 'visible' }); // Wait for the button to appear
  await expect(this.page.locator('#back-to-products')).toBeVisible(); // Verify if it is visible  
});