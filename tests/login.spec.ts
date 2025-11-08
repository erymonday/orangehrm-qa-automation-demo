
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Login (POM) tests', () => {

  test('Valid login shows dashboard', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', 'admin123');
    await expect(page.locator('text=Dashboard')).toBeVisible();
  });

  test('Invalid password shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('Admin', 'wrongpass');
    await login.expectError();
    await expect(page.locator('.oxd-alert--error')).toContainText(/Invalid credentials|username or password/i);
  });

});
