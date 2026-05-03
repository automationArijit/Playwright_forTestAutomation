import { test, expect, Locator } from '@playwright/test';

test('store login session', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  let EmailID: Locator = page.locator('#input-email');
      let Password: Locator = page.locator('#input-password');
      let LoginBtn: Locator = page.locator('//input[@value="Login"]');
  
      await EmailID.fill('chatterjeearijit1991@gmail.com');
      await Password.fill('PlaywrightAutomation');
      await LoginBtn.click();
      //wait for page url:
      await page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account'); // like explicitly wait in selenium.
      //For storing the session in JSON format..
      // Have to give the path of storate: create a pass a directory and json file name.
      await page.context().storageState({path: 'sessionStore/loginsession.json'});
  
});