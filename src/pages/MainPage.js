class MainPage {
  constructor(page) {
    this.page = page;
    this.cardImg = '//*[@id="item_4_img_link"]/img';
  }

  async cardList() {
    await this.page.waitForSelector(this.cardImg, { state: 'visible' });
    return await this.page.locator(this.cardImg).isVisible(); // Retorna um booleano
  }

}

module.exports = { MainPage };