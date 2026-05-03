
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // Two forgot password link presend want to click 1st element.
    await page.getByRole('link', {name:'Forgotten Password'}).first().click(); // for last element click, can use -->> last()

    // back to login page:
    await page.goBack();
    
    //For: Clicking on the second forget password link:
    await page.getByRole('link', {name:'Forgotten Password'}).nth(1).click(); // give the nth index, index always starts from zero.
  
    
})();