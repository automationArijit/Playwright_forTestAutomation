
// iFrame:
import { Page, Browser, expect, chromium, Locator, firefox } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel:'msedge' });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click(); // Use where titte attribute is available.
    

    //iframe will be loaded.

    

   


})();






