import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Hi');
  await page.locator('.oxd-select-text--after').first().click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('option', { name: 'ESS' }).click();
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('listbox').getByText('Enabled').click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await expect(page.getByRole('button', { name: '×' })).toBeVisible();

  await page.getByRole('button', { name: ' Yes, Delete' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();

  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('option', { name: 'ESS' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await expect(page.getByRole('option', { name: '-- Select --' })).toBeVisible();

  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('5874QvrKK');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Timpo');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});