
// Dropdown having select and option tag:
import { Page, Browser, expect, chromium, Locator, firefox } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await firefox.launch({ headless: false });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

    await nonSelectDropdown(page,'programming language','PHP');
    await page.waitForTimeout(2000);
    await nonSelectDropdown(page,'web framework','Django');
    await page.waitForTimeout(2000);
    //await nonSelectDropdown(page,'database preference','Oracle Database');
    // await page.waitForTimeout(2000);
    await nonSelectDropdown(page,'deployment platform','Netlify');
    await page.waitForTimeout(2000);
    await nonSelectDropdown(page,'code editor/IDE','Eclipse');
    await page.waitForTimeout(2000);
    await nonSelectDropdown(page,'experience level','Senior (7-10 years)');

   


})();
async function nonSelectDropdown (page:Page, partialDropdownLebel:string, value:string):Promise<void> {
    await page.locator(`//div[@class='select-trigger']/span[contains(text(),'${partialDropdownLebel}')]`).click();
    await page.getByText(`${value}`,{ exact: true }).click(); //have to give exact here, because duplicate element present.
}






