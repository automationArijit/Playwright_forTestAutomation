import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('check page title', async ({ page, }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); // goto function return promise so write 'await' before
    let title: string = await page.title(); // title function return promise so write 'await' before
    console.log('Page tittle is: ' + title);
    expect(title).toBe('Account Login');
   
});

