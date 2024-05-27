const {test, expect} = require('@playwright/test')

test('InputBox', async({page})=> {

    await page.goto('https://demo.nopcommerce.com/register')

    //Input name

    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible()
    //or page.fill("[//input[@id='FirstName']",'John')
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty()
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable()
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled()
    

    await page.locator("//input[@id='FirstName']").fill("John")
    await page.waitForTimeout(5000);

})

