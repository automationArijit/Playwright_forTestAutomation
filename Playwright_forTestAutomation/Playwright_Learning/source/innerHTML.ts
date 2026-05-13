// to get the inner HTML of the element.
// InV: What if there is a header text, I want to capture it, the No of ways =3
//(a) By using innerText (b) By using textContent (c) By using innerHTML

import { Page, Browser,expect, chromium } from "@playwright/test";
//IIFE:
(async ()=>{
let browserLaunch:Browser = await chromium.launch({headless:false, channel:'msedge'});
let page:Page = await browserLaunch.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
let value:string = await page.getByText('Register Account').innerHTML();
console.log(value);

//Firstname does not have any child, so innerHTML will return us nothing.
//Element: <input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">
let firstName:string = await page.locator('#input-firstname').innerHTML();
console.log(firstName); //Nothing will return.

// If the element have no child innerHTML will not return anything.
// In this page 'form' have so many childs, so we get the inner HTML.


let formFiled:string = await page.locator('.form-horizontal').innerHTML();
console.log(formFiled); // Get the inner HTML

//To get the complete HTML of the page: just write ==>  page.locator('html').innerHTML();
console.log('Bye!!');

//Note: textContect() ==> Give also the inner text (not visible on the page). Disaplay text in the page: Always use, innerText().


})();