
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  
    // Come to Registration page:
    await page.getByRole('link', { name: 'Register' }).click();
    // Diff b/w innerText() and textContent():
    //Heading text fetching:
    let headerText: string | null = await page.getByText('Register Account', { exact: true }).textContent(); // Wll give the inner text in the element + hiddent text present in the DOM.
    console.log('Text content in the header: ' + headerText);

    // exact =true , means passing the exact text, not partial.

    let headertext: string = await page.getByText('Register Account', { exact: true }).innerText();
    console.log('Inner text present in the header: ' + headertext);

    await page.getByRole('img', { name: 'naveenopencart' }).click(); // For image, use alt= 'naveenopencart', using alt value.
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.getByAltText('naveenopencart').click(); //use alt= 'naveenopencart', using alt value. [For image]
  

    //Go to another page: Amazon
    await page.goto('https://www.amazon.in/');
    await page.getByRole('img', { name: 'Refrigerators' }).highlight(); // For image, use alt= 'naveenopencart', using alt value.
    await page.waitForTimeout(2000);
    await page.getByRole('img', { name: 'Home tools' }).click(); //// For image, use alt= 'naveenopencart', using alt value.
    //await page.close();

})();