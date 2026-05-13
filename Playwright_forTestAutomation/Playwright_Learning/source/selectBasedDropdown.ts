
// Dropdown having select tag:
import { Page, Browser, expect, chromium, Locator } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page: Page = await browserLaunch.newPage();
    await page.goto('file:///D:/For%20Sublime%20text/facebookDropdown.html');

    let month: Locator = page.locator('#month');
    let day: Locator = page.locator('#day');
    let year: Locator = page.locator('#year');

    //selectOption(); ==> Always searching for slect+option tags in html.

    //For select by "Value" attribute: Paasing the value here. >> 2nd Preference.
    await day.selectOption('4');
    await month.selectOption('feb');
    await year.selectOption('2022');

    await page.waitForTimeout(3000);

    //For select by "visibleText" here it is :=> label >> 1st Preference.
   await day.selectOption({label:'2'});
   await month.selectOption({label:'October'});
   await year.selectOption({label:'2023'});

   await page.waitForTimeout(3000);

   //For select by "index" here it is :=> label >> 3rd Preference.
   await day.selectOption({index:1});
   await month.selectOption({index:3});
   await year.selectOption({index:1});




})();

async function selectDropDownByValue(element: Locator, Value: string): Promise<void> {
    await element.selectOption(Value);
    await expect(element).toHaveValue(Value); // this assertion we can use directly only for select by value.
}

async function selectDropDownByLabel(element: Locator, labelValue: string): Promise<void> {
    await element.selectOption({ label: labelValue });
    let selectedValue = await element.inputValue(); //For visible text we have to store the value by using ==>> inputValue();
    await expect(element).toHaveValue(selectedValue); 
}

async function selectDropDownByIndex(element: Locator, indexVal: number): Promise<void> {
    await element.selectOption({ index: indexVal });
    let selectedValue = await element.inputValue(); //For index we have to store the value by using ==>> inputValue();
    await expect(element).toHaveValue(selectedValue);
}


