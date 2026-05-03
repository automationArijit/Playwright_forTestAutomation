import { test, expect, Locator } from '@playwright/test';
import { log } from 'console';

test('back and forward button simulation test', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    console.log(await page.title());
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(await page.title());

    //For browser back:
    await page.goBack();
    console.log(await page.title());

     //For browser forward:
     await page.goForward();
    console.log(await page.title());

     //Again browser back:
     await page.goBack();
    console.log(await page.title());

    // To refresh the page:
    await page.reload();

    //page.waitForTimeout(5000);
})