const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given('que tenho um produto adicionado', async function () {
  await this.buyPage.clickAdd();
  await this.buyPage.clickCart();
});

When("clico para adicionar um produto no carrinho", async function () {
  await this.buyPage.clickAdd();
});

When("clico em carrinho", async function () {
  await this.buyPage.clickCart();
});

When("clico em remover produto", async function () {
  await this.buyPage.clickRemove();
});

Then("eu devo ver o produto adicionado no carrinho",  async function () {
    await this.page.waitForSelector("#remove-sauce-labs-backpack", { state: "visible" }); // Aguarda o botão aparecer
    await expect(this.page.locator("#remove-sauce-labs-backpack")).toBeVisible(); // Verifica se está visível
  }
);

Then("eu devo ver o produto removido no carrinho",  async function () {
    await this.page.waitForSelector("#remove-sauce-labs-backpack", { state: "hidden" }); 
    await expect(this.page.locator("#remove-sauce-labs-backpack")).toBeHidden(); // Verifica se não está visível
  }
);
