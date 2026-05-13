

import { Page, Browser, expect, chromium } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://practice.expandtesting.com/dynamic-table');

    let dynamicValue: string[] = await page.locator(`//td[text()='Firefox']/following-sibling::td`).allInnerTexts();
    console.log(dynamicValue);

    async function dynamicElement(page: Page, value: string): Promise<string[]> {
        return await page.locator(`//td[text()='${value}']/following-sibling::td`).allInnerTexts();
    }


    let headers = ['CPU', 'Memory', 'Network', 'Disk'];

    for (let i = 0; i < dynamicValue.length; i++) {

        console.log(`${headers[i]} : ${dynamicValue[i]}`);

    }
    console.log('------------------------------');

    let valueA:string[] = await dynamicElement(page, 'Chrome');
    console.log(valueA);
    let valueB:string[] =await dynamicElement(page, 'System');
    console.log(valueB);

})();


