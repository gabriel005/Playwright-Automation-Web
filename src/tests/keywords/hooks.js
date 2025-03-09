const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser, context, page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Launches the Chrome (Chromium) browser in non-headless mode (visible)
  context = await browser.newContext(); // Creates a new browser context
  page = await context.newPage(); // Creates a new page in the context
  this.page = page; // Stores the page in the test context
});

After(async function () {
  await browser.close(); // Closes the browser after each test
});

module.exports = { page }; // Exports the page object for use in tests
