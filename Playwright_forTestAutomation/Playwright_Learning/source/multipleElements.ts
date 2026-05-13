
import { Browser, chromium, Locator, Page } from "@playwright/test";
//IIFE:
(async () => {
    let BrowserLaunch: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await BrowserLaunch.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allRightPannelTexts: string[] = await page.locator(`//div[@class='list-group']/a`).allInnerTexts() // RT: string[]
    //  // To fetch all texts inside the elements , like, findElements().

    // To fetch the total number of links: array.length
    console.log(allRightPannelTexts.length);

    //To get the array of all the inks:
    console.log(allRightPannelTexts);

    // Using For...of loop, clicking on perticular link and breaking the loop:

    for (let e of allRightPannelTexts) {
        console.log(e);

        //Clicking on perticular link:
        if (e === 'Forgotten Password') {
            await page.getByText(e).first().click(); // Here using first(), coz 2 Forgotten Password link available, give error.
            break; //breaking the loop
        }

    }

    // Using index based loop to iterate the element:
    for (let i = 0; i < allRightPannelTexts.length; i++) {

        if (allRightPannelTexts[i] === 'Recurring payments') {
            await page.getByText(allRightPannelTexts[i]).first().click();
            break; //breaking the loop
        }
    }

    console.log('----------------------------------------------');
    //Capturing all footer links:
    let arrayContainer = []; //0
    let footerLinks: Locator[] = await page.locator('footer a').all(); // RT: Locator[]
    console.log(footerLinks.length); // Total no of footer links. -16

    for (let ele of footerLinks) {
        //console.log(await ele.innerText()); // will give you the innertext of the footer links.

        //console.log(await ele.getAttribute('href')); // will get all the footer links.

        let FooterLinkText: string = await ele.innerText();
        arrayContainer.push(FooterLinkText);

        console.log(arrayContainer.length); //16
        console.log(arrayContainer);


    }



})();