const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');


Given('que eu estou na página de login', async function () {
  this.loginPage = new LoginPage(this.page); //Cria objeto da pagina
  await this.loginPage.navigate(); // Navegar até a página de login
});

When('eu tento fazer login com o usuário {string} e senha {string}', async function (username, password) {
  await this.loginPage.login(username, password); // Fazer o login com as credenciais fornecidas
});

Then('eu devo ver a mensagem de erro {string}', async function (errorMessage) {
  const actualErrorMessage = await this.loginPage.getErrorMessage(); // Obter a mensagem de erro
  expect(actualErrorMessage).toContain(errorMessage); // Verificar se a mensagem de erro está correta
  //await page.pause(); // Isso vai pausar o navegador, permitindo inspeção
});

Then('eu devo ser redirecionado para tela inicial', async () => {
  const ProductPage = new ProductPage(this.page);
  const cardVisible = await ProductPage.cardList();
  expect(cardVisible).toBeTruthy(); // Verifica se o card está visível
});

Then('eu devo ver a mensagem de bloqueado {string}', async (blockMessage) => { //blockMessage contem o valor de {string}
  const actualBlockMessage = await this.loginPage.getErrorMessage(); 
  expect(actualBlockMessage).toBe(blockMessage);
});