
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let nameAttributeValue: string | null = await page.locator('#input-email').getAttribute('name'); // Passing the attribute name.
    console.log('The attribute value is: ' + nameAttributeValue); // Getting the attribute value.

    let placeHolderAttributeValue: string | null = await page.locator('#input-email').getAttribute('placeholder'); // Passing the attribute name.
    console.log('The attribute value is: ' + placeHolderAttributeValue); // Getting the attribute value.

    let emailField: Locator = page.locator('#input-email');
    await emailField.fill('arijit@gmail.com');

    // In playwright we can fetch the value of the attribute which are already present in the DOM.
    // Question: Give me the value of the the passing 

    // let enteredValue: string | null = await emailField.getAttribute('value'); // For Fetching the value we pass 'arijit@gmail.com'
    // console.log('The attribute value is: ' + enteredValue); // Getting the attribute value. --->> This will not work. In selenium it works.

    let enteredValue: string = await emailField.inputValue(); // Use it to fetch the value which we entered for the email field.
    console.log('The attribute value is: ' + enteredValue);

    // Use getAttribute() for other than 'value' attribute.

  
})();