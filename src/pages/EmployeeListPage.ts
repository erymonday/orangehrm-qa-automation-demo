
import { Page } from '@playwright/test';

export class EmployeeListPage {
  readonly page: Page;
  readonly pimMenu = 'a[href*="pim"]';
  readonly employeeList = 'a[href*="viewEmployeeList"]';
  readonly nameInput = 'input[placeholder="Type for hints..."]';
  readonly searchButton = 'button[type="submit"]';
  readonly noRecords = 'text=No Records Found';
  readonly rows = 'div[role="row"]';

  constructor(page: Page) {
    this.page = page;
  }

  async gotoList() {
    await this.page.click(this.pimMenu);
    await this.page.click(this.employeeList);
  }

  async searchByName(name: string) {
    await this.page.fill(this.nameInput, name);
    await this.page.click(this.searchButton);
  }

  async expectNoRecords() {
    await this.page.waitForSelector(this.noRecords);
  }
}
