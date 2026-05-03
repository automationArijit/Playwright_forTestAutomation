// Run TC with using test () block:
// 90% function are async, await, so it return promises.
// =>{   --> it is arrow function.

// })
//page referance is comming from playwright
// it returns arrow function.
// If a function return promises then must have to use await
//'expect' = For assertion.


import { test, expect, APIResponse } from "@playwright/test";

test('check page title', async ({ page, request }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); // goto function return promise so write 'await' before
    let title: string = await page.title(); // title function return promise so write 'await' before
    console.log('Page tittle is: ' + title);
    expect(title).toBe('Account Login');

        // For API: After 'page' we have to supply another parameter >> 'request'
    let response: APIResponse = await request.get('https://gorest.co.in/public/v2/users');
    let statusCode: number = response.status();
    console.log(statusCode);
    let textinStatus: string = response.statusText();
    console.log(textinStatus);
    console.log(response.json());
   
});

// For API: After 'page' we have to supply another parameter >> 'request'



