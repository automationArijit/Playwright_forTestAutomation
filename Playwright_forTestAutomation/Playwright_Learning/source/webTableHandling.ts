// to get the inner HTML of the element.
// InV: What if there is a header text, I want to capture it, the No of ways =3
//(a) By using innerText (b) By using textContent (c) By using innerHTML

import { Page, Browser, expect, chromium } from "@playwright/test";
//IIFE:
(async () => {

    let browserLaunch: Browser = await chromium.launch({ headless: false, channel: 'msedge' });
    let page: Page = await browserLaunch.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    // 1. Direct approch to select the user:
    let eleJoeRoot = await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();
    //John.Smith
    let eleJohnSmith = await page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click();


    await selectUserWithXpath(page, 'Robert.Taylor');
    await selectUserWithXpath(page, 'Jessica.White');

    //Solve this by using ==>> **CSS: Sudo class** = locator(`tr:has(td:text('Michael.Brown'))`).locator('td').first();

    //How to read this line of Sudo: tr have td whichhaving text() function with name as 'ABC', 
    // then again locating td, specify first td, then click [one tr have multiple td's]

    await page.locator(`tr:has(td:text('Michael.Brown'))`).locator('td').first().click();

    // 3. By using CSS Sudo class, Creating a custom async function for the users: To avoid repetative task.
    async function selectUserWithCSS(page: Page, userName: string): Promise<void> {
        await page.locator(`tr:has(td:text('${userName}'))`).locator('td').first().click();
    }

    await selectUserWithCSS(page, 'Jonathan.Adams');
    await selectUserWithCSS(page, 'Stephanie.Baker');

    //Using CSS Sudo class 
    let heading: string = await page.locator(`h1:text('Employee Management System')`).innerText();
    console.log(heading);


    let userDetails: string[] = await getUserDetails(page, 'Daniel.Thompson');
    console.log(userDetails);

    //using index based foor loop for fetching the user data. with Description. So first create a description/heading array. 
    let userHeading = ['User Role', 'Employee Name', 'Status '];

    //using foor loop:
    for (let i = 0; i < userDetails.length; i++) {
        console.log(`${userHeading[i]} : ${userDetails[i]}`);

    }
    // O/P=>    User Role : Manager
    // Employee Name : Daniel Thompson
    // Status  : ENABLED






})();


//We can create custom function inside/outside the arrow function....

// 2. Creating a custom async function for the users: To avoid repetative task.
async function selectUserWithXpath(page: Page, userName: string): Promise<void> {
    await page.locator(`//td[text()='${userName}']/preceding-sibling::td/input[@type='checkbox']`).click();
}


async function getUserDetails(page: Page, userName: string): Promise<string[]> {
    return await page.locator(`//td[text()='${userName}']/following-sibling::td`).allInnerTexts();
}
