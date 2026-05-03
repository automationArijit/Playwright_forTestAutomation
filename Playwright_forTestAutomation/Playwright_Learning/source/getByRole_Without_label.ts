
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://uttoron.dcsdev.org/user');

    // If <label> or area-lebel is not available then getByRole() --->> Take the placeholder value, we can pass it.
    await page.getByRole('textbox', { name: 'User Name (Required)' }).fill('Automation');

    await page.goto('https://grotechminds.com/registeration-form/');
    await page.locator('#c_bs_1').check(); //Condition: Make sure checkbox is unchecked, or else not work
    await page.waitForTimeout(4000);
    await page.locator('#c_bs_1').uncheck(); //Condition: Make sure checkbox is checked, or else not work



})();