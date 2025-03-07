const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect, chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { MainPage } = require('../../pages/MainPage');

let browser, page, loginPage;

Given('que eu estou na página de login', async () => {
  browser = await chromium.launch({ headless: false }); // Inicia o navegador Chrome (Chromium) de forma visível
  const context = await browser.newContext(); // Cria um contexto para o navegador
  page = await context.newPage(); // Cria uma nova página
  loginPage = new LoginPage(page); //Cria objeto da pagina
  await loginPage.navigate(); // Navegar até a página de login
});

When('eu tento fazer login com o usuário {string} e senha {string}', async (username, password) => {
  await loginPage.login(username, password); // Fazer o login com as credenciais fornecidas
});

Then('eu devo ver a mensagem de erro {string}', async (errorMessage) => {
  const actualErrorMessage = await loginPage.getErrorMessage(); // Obter a mensagem de erro
  expect(actualErrorMessage).toContain(errorMessage); // Verificar se a mensagem de erro está correta
  //await page.pause(); // Isso vai pausar o navegador, permitindo inspeção
  await browser.close(); // Fechar o navegador após o teste
});

Then('eu devo ser redirecionado para tela inicial', async () => {
  const mainPage = new MainPage(page);
  const cardVisible = await mainPage.cardList();
  expect(cardVisible).toBeTruthy(); // Verifica se o card está visível
  await browser.close();
});

Then('eu devo ver a mensagem de bloqueado {string}', async (blockMessage) => { //blockMessage contem o valor de {string}
  const actualBlockMessage = await loginPage.getErrorMessage(); 
  expect(actualBlockMessage).toBe(blockMessage);
  await browser.close();
});