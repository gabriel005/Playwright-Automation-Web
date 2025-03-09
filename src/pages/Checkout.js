class Checkout {
  constructor(page) {
    this.page = page;
    this.buttonCheckout = '[data-test="checkout"]';
    this.buttonContinue = '[data-test="continue"]';
    this.buttonFinish = '[data-test="finish"]';
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
  }

  async clickCheckout() {
    await this.page.waitForSelector(this.buttonCheckout, { state: "visible" });
    await this.page.click(this.buttonCheckout);
  }

  async clickContinue() {
    await this.page.waitForSelector(this.buttonContinue, { state: 'visible' });
    await this.page.click(this.buttonContinue);
  }

  async clickFinish() {
    await this.page.waitForSelector(this.buttonFinish, { state: 'visible' });
    await this.page.click(this.buttonFinish);
  }

  async form() {
    await this.page.waitForSelector(this.firstNameInput, { state: 'visible' });
    await this.page.fill(this.firstNameInput, 'Playwright');
    await this.page.fill(this.lastNameInput, 'Teste');
    await this.page.fill(this.postalCodeInput, '123456');
  }

}

module.exports = { Checkout };
