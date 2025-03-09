class BuyPage {
    constructor(page) {
      this.page = page;
      this.buttonAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
      this.buttonRemove = '[data-test="remove-sauce-labs-backpack"]';
      this.buttonCart = '[data-test="shopping-cart-link"]';
    }
  
    async clickAdd() {
        await this.page.waitForSelector(this.buttonAdd, { state: 'visible' });
        await this.page.click(this.buttonAdd);
    }

    async clickRemove() {
        await this.page.waitForSelector(this.buttonRemove, { state: 'visible' });
        await this.page.click(this.buttonRemove);
    }

    async clickCart() {
        await this.page.waitForSelector(this.buttonCart, { state: 'visible' });
        await this.page.click(this.buttonCart);
    }
  
  }
  
  module.exports = { BuyPage };