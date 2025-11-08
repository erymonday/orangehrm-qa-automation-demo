
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { EmployeeListPage } from '../src/pages/EmployeeListPage';

test.describe('Search (POM) tests', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', 'admin123');
    await expect(page.locator('text=Dashboard')).toBeVisible();
  });

  test('Search employee by name', async ({ page }) => {
    const employee = new EmployeeListPage(page);
    await employee.gotoList();
    await employee.searchByName('orange');
    const rows = page.locator(employee.rows);
    await expect(rows.first()).toBeVisible();
  });

  test('Search no results for random string', async ({ page }) => {
    const employee = new EmployeeListPage(page);
    await employee.gotoList();
    await employee.searchByName('zzxy123');
    await employee.expectNoRecords();
  });

});
