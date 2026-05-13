
// Dropdown having select and option tag:
import { Page, Browser, expect, chromium, Locator, firefox } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await firefox.launch({ headless: false });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://react-select.com/home');

    await nonSelectDropdown(page,'programming language','PHP');
    await page.waitForTimeout(2000);
    

   


})();
async function nonSelectDropdown (page:Page, partialDropdownLebel:string, value:string):Promise<void> {
    await page.locator(`//div[@class='select-trigger']/span[contains(text(),'${partialDropdownLebel}')]`).click();
    await page.getByText(`${value}`,{ exact: true }).click(); //have to give exact here, because duplicate element present.
}

//https://react-select.com/home --> try this website dropdown.





