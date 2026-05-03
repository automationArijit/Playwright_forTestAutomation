import {Page,Browser,expect, chromium} from '@playwright/test'


//IIFE
( async () =>{
  let BrowserLaunch: Browser  = await chromium.launch({headless:false , channel:'chrome'});
let page:Page= await BrowserLaunch.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

// Finding the element by using locator + performing the action by using await:
page.locator('');

} )();