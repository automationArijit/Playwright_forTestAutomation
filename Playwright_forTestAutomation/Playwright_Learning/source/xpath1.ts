// to get the inner HTML of the element.
// InV: What if there is a header text, I want to capture it, the No of ways =3
//(a) By using innerText (b) By using textContent (c) By using innerHTML

import { Page, Browser, expect, chromium } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page: Page = await browserLaunch.newPage();
//     await page.goto('https://www.espncricinfo.com/series/ipl-2026-1510719/rajasthan-royals-vs-gujarat-titans-52nd-match-1529295/live-cricket-score');


//     //cearing async custom function
//     async function playerInfo(page: Page, playerName: string): Promise<string> {
//         return await page.locator(`(//span[text()='${playerName}']/ancestor::td/following-sibling::td/span)[1]
// `).innerText() // returning promise <string>
//     }

//     let run: string = await playerInfo(page, 'Donovan Ferreira');
//     console.log(run);


    await page.goto('https://www.cricbuzz.com/live-cricket-scores/153780/ban-vs-pak-1st-test-pakistan-tour-of-bangladesh-2026');

    //Creating custom fumction:
    async function BatterInfo(page: Page, playerName: string): Promise<string> {
        return await page.locator(`//a[text()='${playerName}']/../..//div[@class='flex justify-center items-center text-sm font-bold wb:font-normal']
`).innerText() // returning promise <string>
    }

    let runScore: string = await BatterInfo(page, 'Abdullah Fazal');
    console.log(runScore);



})();


