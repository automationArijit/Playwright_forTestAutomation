import { test, expect, chromium, Browser, BrowserContext, Page, Locator } from '@playwright/test';


test('title checking', async () => {

    let brwoserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let context1: BrowserContext = await brwoserLaunch.newContext();
    let context2: BrowserContext = await brwoserLaunch.newContext();

    let page1: Page = await context1.newPage();
    let page2: Page = await context2.newPage();

    //User1:
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let EmailID: Locator = page1.locator('#input-email');
    let Password: Locator = page1.locator('#input-password');
    let LoginBtn: Locator = page1.locator('//input[@value="Login"]');

    await EmailID.fill('chatterjeearijit1991@gmail.com');
    await Password.fill('PlaywrightAutomation');
    await LoginBtn.click();
    
    
   //User2:
   await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let EmailID1: Locator = page2.locator('#input-email');
    let Password1: Locator = page2.locator('#input-password');
    let LoginBtn1: Locator = page2.locator('//input[@value="Login"]');

    await EmailID1.fill('watercolour.arijit@gmail.com');
    await Password1.fill('PlaywrightAutomation');
    await LoginBtn1.click();

    await context1.close();
    await context2.close();

    //await brwoserLaunch.close();
    // page1.waitForTimeout(5000);
    // page2.waitForTimeout(5000);

});