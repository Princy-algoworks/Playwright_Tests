const {test, expect} = require('@playwright/test')

test('SoftAssertions', async ({page})=> {

    await page.goto('https://demo.nopcommerce.com/register')
     
    //Hard Assertions
    await expect(page).toHaveTitle('nopCommerce demo99 store. Register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //Soft Assertions
    await expect.soft(page).toHaveTitle('nopCommerce demo99 store. Register')
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

        
    



})