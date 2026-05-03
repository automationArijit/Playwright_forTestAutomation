import { test, expect, Locator } from '@playwright/test';

test('launch url with different condition test', async ({ page }) => {

await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login', {waitUntil:'load'} );

    let pageTitle:string = await page.title();
    console.log('Title of the page is:'+ pageTitle);
               
           

});