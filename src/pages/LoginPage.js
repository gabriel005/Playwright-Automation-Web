class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.submitButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }

  async getErrorMessage() {
     // Waits until the error message is visible
     await this.page.waitForSelector(this.errorMessage);
     return await this.page.textContent(this.errorMessage);
  }  

}

module.exports = { LoginPage };