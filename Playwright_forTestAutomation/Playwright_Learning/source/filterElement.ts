
import { Browser, chromium, Locator, Page } from "@playwright/test";
//IIFE:
(async () => {
    let BrowserLaunch: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await BrowserLaunch.newPage();
    await page.goto('https://demowebshop.tricentis.com/');

    //Suppose, total number of footer is = 16, We have tofind out footer link havinng text ='Recently viewed products'

    // Capturing all the footer links:
    let allFooterlinks: Locator = page.locator(`[class='footer-menu-wrapper'] a`);
    //Clicking on the specific link by using filter:
    await allFooterlinks.filter({ hasText: 'Recently viewed products' }).click();

})();