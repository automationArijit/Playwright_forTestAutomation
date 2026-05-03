
import { Browser, chromium, Locator, Page } from "@playwright/test";

// Creating IIFE:
(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    //Filling firstname:
    let firstname: Locator = page.getByRole('textbox', { name: 'First Name' }); // name of the label, we can add * also bfore *Firstname
    // Press words like a human:
    await firstname.pressSequentially('Automation', { delay: 200 }); //delay in milisec.
    //Filling lastname:
    let lastname: Locator = page.getByRole('textbox', { name: 'Last Name' });
    await lastname.pressSequentially('Testing', { delay: 200 });

    // Clicking on radio button:
    let yesradioButton: Locator = page.getByRole('radio', { name: ' Yes' });
    await yesradioButton.click();

    // Clicking on checkbox: --> Not use getby role, if label not available, not safre, may cause flacky tc, use other locatoe statigy.
    // Here only one checkbox, what if other application contain may checkbox.
    let checkbox: Locator = page.locator(`input[name='agree']`);
    await checkbox.click();

    //Clicking ob Continue button using getByRole():
    let ContinueButton: Locator = page.getByRole('button', { name: 'Continue' });
    await ContinueButton.click();

})();