const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser, context, page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Inicia o navegador Chrome (Chromium) de forma visível
  context = await browser.newContext(); // Cria um contexto para o navegador
  page = await context.newPage(); // Cria uma nova página
  this.page = page; // Armazena a página no contexto do teste
});

After(async function () {
  await browser.close(); // Fecha o navegador após cada teste
});

module.exports = { page };
