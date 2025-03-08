class ProductPage {
  constructor(page) {
    this.page = page;
    this.cardImg = '//*[@id="item_4_img_link"]/img';
    this.buttonOrder = '[data-test="product-sort-container"]';
    this.buttonOrderLowPrice = 'option[value="lohi"]';
    this.cardPriceSelector = '.inventory_item_price'; // Seletor do preço dos cards    
  }

  async cardList() {
    await this.page.waitForSelector(this.cardImg, { state: 'visible' });    
    return await this.page.locator(this.cardImg).isVisible(); // Retorna um booleano
  }

  async cardPrices() {
    await this.page.waitForSelector(this.cardPriceSelector, { state: 'visible' });
    const prices = await this.page.locator(this.cardPriceSelector).allTextContents(); // Pega todos os preços como texto
    return prices.map(price => parseFloat(price.replace('$', '').trim())); // Converte para número e remove o simbolo '$'
  }

  async clickOrder() {
    await this.page.waitForSelector(this.buttonOrder, { state: 'visible' });
    await this.page.selectOption(this.buttonOrder, { value: "lohi" }); 
    await this.page.waitForSelector(this.cardPriceSelector, { state: 'attached' });  // Aguarda a atualização dos preços 
  }

  async clickDetails() {
    await this.page.waitForSelector(this.cardImg, { state: 'visible' });
    await this.page.click(this.cardImg);
  }

}

module.exports = { ProductPage };