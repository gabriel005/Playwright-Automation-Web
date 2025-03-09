const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given('I have a product added', async function () {
  await this.buyPage.clickAdd();
  await this.buyPage.clickCart();
});

When("I click to add a product to the cart", async function () {
  await this.buyPage.clickAdd();
});

When("I click on the cart", async function () {
  await this.buyPage.clickCart();
});

When("I click to remove the product", async function () {
  await this.buyPage.clickRemove();
});

Then("I should see the added product in the cart",  async function () {
    await this.page.waitForSelector("#remove-sauce-labs-backpack", { state: "visible" }); // Wait for the button to appear
    await expect(this.page.locator("#remove-sauce-labs-backpack")).toBeVisible(); // Check if it is visible
  }
);

Then("I should see the removed product in the cart",  async function () {
    await this.page.waitForSelector("#remove-sauce-labs-backpack", { state: "hidden" }); 
    await expect(this.page.locator("#remove-sauce-labs-backpack")).toBeHidden(); // Check if it is not visible
  }
);
