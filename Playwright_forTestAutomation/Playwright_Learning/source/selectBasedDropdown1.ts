
// Dropdown having select and option tag:
import { Page, Browser, expect, chromium, Locator } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/selectdropdowns.html');

    let country: Locator = page.locator('#country');
    let experience: Locator = page.locator('#experience');
    let industry: Locator = page.locator('#industry');
    let projectsize: Locator = page.locator('#project-size');
    let communication: Locator = page.locator('#communication');
    let timezone: Locator = page.locator('#timezone');

    //Utilising the custom function:
    selectByValueDropdown(country,'de');
    await page.waitForTimeout(2000);
    selectByVisibleTextDropdown(experience,'Intermediate (2-4 years)');
    await page.waitForTimeout(2000);
    selectByIndextDropdown(industry,4);

    selectByValueDropdown(projectsize,'medium-team');
    await page.waitForTimeout(2000);
    selectByVisibleTextDropdown(communication,'Visual aids and diagrams');
    await page.waitForTimeout(2000);
    selectByIndextDropdown(timezone,9);


})();


//1. Custom function for select by value, assertion is direct approch with value dropdown.
async function selectByValueDropdown(elelement:Locator, Value:string) : Promise<void> {
    await elelement.selectOption(Value);
    await expect(elelement).toHaveValue(Value);
}

//2. Custom function for select by visible text, assertion is not direct approch with visible text dropdown.
async function selectByVisibleTextDropdown(elelement:Locator, labelValue:string) : Promise<void> {
    await elelement.selectOption({label:labelValue});
   let visibleTextValue:string = await elelement.inputValue();
    await expect(elelement).toHaveValue(visibleTextValue);
}
//3. Custom function for select by index, assertion is not direct approch with index dropsown.
async function selectByIndextDropdown(elelement:Locator, indexValue:number) : Promise<void> {
    await elelement.selectOption({index:indexValue});
   let visibleIndexValue:string = await elelement.inputValue();
   await expect(elelement).toHaveValue(visibleIndexValue);
}

//To run this in Firefox , use: ===>>
// import { firefox } from '@playwright/test';

// const browser = await firefox.launch({
//     headless: false
// });




