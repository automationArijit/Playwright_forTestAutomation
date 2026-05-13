
import { Browser, chromium, Locator, Page } from "@playwright/test";
//IIFE:
(async () => {
    let BrowserLaunch: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await BrowserLaunch.newPage();
    await page.goto('https://www.flipkart.com/');

    //Total no of links in the page:
    let Totallinks: string[] = await page.locator('//a').allInnerTexts(); // acn also use 'a' / a[href] /  //a[@href]
    //await page.waitForTimeout(2000);
    console.log('Total no of links in the page:= ' + Totallinks.length);

    // Other than text if we want to get something: use all() insted of allInnerTexts():

    await page.goto('https://www.amazon.co.in');
    //Searching for sharee:
    const productSearch = page.locator(`#twotabsearchtextbox`);

    await productSearch.fill('shirt');
    await productSearch.press('Enter');

    await page.waitForTimeout(20000);

    let TotallElement: Locator[] = await page.locator('img[alt]').all(); // CSS value
    // Have to find total no of images caontaining alt tag:
    console.log(TotallElement.length); // Total no of images having alt tag.

    for (let ele of TotallElement) {

        console.log(await ele.getAttribute('alt')); // will get all the image having alt value

    }

})();