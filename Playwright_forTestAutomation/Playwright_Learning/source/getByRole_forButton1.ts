
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //Clicking on the Login button: most time 'value' attribute have the button actual name..
    await page.getByRole('button', { name: 'Login' }).click();

    //Highlighting the Continue button. see the DOM, some button have <a> tag, that means link:
    await page.getByRole('link', { name: 'Continue' }).highlight();
   // input/ button tag --> role will be 'button', For link --> Role will be 'link'.
   // If <label> or area-lebel is not available then getByRole() --->> Take the placeholder value, we can pass it.




})();