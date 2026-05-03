
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://www.freshworks.com/');

     //For header we can Use getByRole(): h1-h6
     // capture the text of first one of this header, if page have 6 h1 deader, we want to get the first header text of h1, 
     //Then we have to givel the level as 1 ans so on....
    let headetText: string = await page.getByRole('heading', { name: 'Enterprise gra',level:1 }).innerText();
     console.log(headetText); // Here in 'name' we supply partial text.

    //For header we can Use getByRole(): h1-h6
    let HeadetText: string = await page.getByRole('heading', { name: 'Powerful solutions to unlock' }).innerText();
    console.log(HeadetText); // Here in 'name' we supply partial text.

    // Picking the text of third h2 header.
     let headettext: string = await page.getByRole('heading', { name: 'Designed for' }).innerText();
    console.log('Picking the text of third h2 header:- '+headettext); // Here in 'name' we supply partial text.


    // For span, div, paragraph tag --> getByRole not work, use getByText()/CSS/XPath
    let spanText: string = await page.getByText('Freshworks provides AI-first IT and cust').innerText(); // Here we can supply partial text.
    console.log(spanText);



})();