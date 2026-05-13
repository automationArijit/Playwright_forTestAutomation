
import { Browser, chromium, Locator, Page } from "@playwright/test";
//IIFE:

(async () => {
    let BrowserLaunch: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await BrowserLaunch.newPage();
    await page.goto('https://www.amazon.in/');

    // In any website, Search field Auto suggestion comes, after entering text, click on specific auto suggestion.

    //Locating search field:
    let searchField: Locator = page.locator(`#twotabsearchtextbox`);

    // Passing the value in the search field:
    await searchField.pressSequentially('tshirt', { delay: 200 }); // in miliseconds.

    // Capturing all the auto suggestions:
    //div[class='two-pane-results-container'] div[id*='sac-suggestion-row'][role='row']
    let autoSuggestion:Locator = page.locator(`div.s-suggestion-container`); //small css

    //Clicking on the specific auto suggestion: 

    await autoSuggestion.filter({ hasText: 'for kids boys' }).click();

})();