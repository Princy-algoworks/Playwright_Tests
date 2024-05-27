const{test,expect} = require('@playwright/test')
//import {test,expect} from '@playwright/test

test('Locators', async ({page})=> {
    await page.goto('https://demoblaze.com/index.html');

    //click on login button
    await page.locator('id=login2').click();
    //or
    //await page.click('id=login2');

    //fill username using id
    await page.fill('#loginusername','pavanol')

    //fill password using CSS
    await page.fill("input[id='loginpassword']",'test@123');

    //Click on login button using xpath
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    // Logout link button presence
    const logoutlink = await page.locator('//*[@id="logout2"]')

    await expect(logoutlink).toBeVisible();
    await page.close();


})