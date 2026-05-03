//  Run TC without using test () block: by using playwright core api.
// Will not close the browser automatically.

import { Browser, chromium, Locator, Page, webkit } from "@playwright/test"; // Browser is predefined interface in playwright.

// It is IIFE: Immidiately invoke function expression.
(async () => {

    let browser: Browser = await chromium.launch({
         headless: false, 
         //channel:'msedge',
         //executablePath: `C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`
         }); //Launch brave browser with headed mode.

    let page: Page = await browser.newPage(); // Page is a class -->> added a page in this browser.
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let title: string = await page.title();
    console.log('Page tittle is:' + title);
    let pageUrl: string = page.url();
    console.log('Url of the page is: ' + pageUrl);
    let emailID: Locator = page.locator('#input-email');
    await emailID.fill('arijitAutomation@gmail.com');
    let password: Locator = page.locator('#input-password');
    await password.fill('playwright2026');
    let loginBtn: Locator = page.locator("//input[@value='Login']");
    await loginBtn.click();
    //await page.close();

})();

//We can use webkit/chromium/firefox
// channel:'msedge' /chrome -> to run TC in actual browser if we want. channel is optional.
// We can not use opera/brave in channel.
// executablePath: `` for opera/brave.
// for firefox: use channel:'firefox' and , itstead chromium use firefox.

