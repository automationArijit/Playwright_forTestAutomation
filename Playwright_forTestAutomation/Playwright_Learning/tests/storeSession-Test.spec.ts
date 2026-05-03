import { test, expect, Locator } from '@playwright/test';
//Saying the test() to use this stored session first, then perform other task.
test.use({storageState:'sessionStore/loginsession.json'})

test('store login session', async ({ page }) => {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
await page.waitForTimeout(5000);

});
// we can check with any other page , ex: https://naveenautomationlabs.com/opencart/index.php?route=account/edit
// We can use it for multi user( admin/non - admin/ super user/ seller user/branch user)
// Selenium will not follow this features. Coz they follow w3c webdriver prottocol, they not allow to do any thing without login, 
// coz from manual perspective we hmust have to follow step wise.

//ideal use cases:
//SSO, cookies, tokenID = forever, 24 hrs,
//JWT, tokens, sessionId

//wont work
// otp
// oauth2.0
//2FA, MFA
//Recaptha