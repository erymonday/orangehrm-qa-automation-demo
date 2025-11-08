
import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username = 'input[name="username"]';
  readonly password = 'input[name="password"]';
  readonly submit = 'button[type="submit"]';
  readonly error = '.oxd-alert--error';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.submit);
  }

  async expectError() {
    await this.page.waitForSelector(this.error);
  }
}
