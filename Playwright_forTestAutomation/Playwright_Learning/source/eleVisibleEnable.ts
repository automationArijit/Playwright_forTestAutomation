
import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('file:///D:/For%20Sublime%20text/one.html');

    let submitButton:Locator = page.locator('#submitBtn');
    let isVisible:boolean= await submitButton.isVisible();
    console.log(isVisible); //true
   
   //Checking the button enabled or not:
   let isEnabledCheck:boolean= await submitButton.isEnabled();
   console.log(isEnabledCheck); //false
   
   //Checking the button diabled or not:
   let isDisabledCheck:boolean= await submitButton.isDisabled();
   console.log(isDisabledCheck); //true

   // After selecting the Checkbox:
  console.log('===========================  After selecting the Checkbox:  =========================');

  
    let isVisible1:boolean= await submitButton.isVisible();
    console.log(isVisible1); //true
   
   //Checking the button enabled or not:
   let isEnabledCheck1:boolean= await submitButton.isEnabled();
   console.log(isEnabledCheck1); //true
   
   //Checking the button diabled or not:
   let isDisabledCheck1:boolean= await submitButton.isDisabled();
   console.log(isDisabledCheck1); //false

   // we should not click on disable element, nothing will happen, but we are getting error.
   // PW will always check the element is visible, enable, stable then only click....

  

  
})();