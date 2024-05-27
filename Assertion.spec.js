// Assertions

const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('AssertionTest', async ({page}) => {
  
//open app url
     await page.goto('https://demo.nopcommerce.com/register')

//1 expect(page).not.toHaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
//2 
     await   expect(page).toHaveTitle('nopCommerce demo store. Register')
//3
   const logo = await page.locator('.header-logo')
    await expect(logo).toBeVisible()
//4
    const firstName = await page.locator('#FirstName')
    await expect(firstName).toBeEnabled();

//5 to be checked radio button
    const gender = await page.locator('#gender-male')
    await gender.click();
    await expect(gender).toBeChecked();

//6 to be checked checkbox button
    const news = await page.locator('#gender-male')
    await expect(news).toBeChecked();

//7 toHaveAttribute
    const attribute = await page.locator('#register-button')
    await expect(attribute).toHaveAttribute('type','submit')

//8 to Have text
    const text_Register = await page.locator('.page-title h1')
    await expect(text_Register).toHaveText('Register')

//9 To contain text
    const contain_Register = await page.locator('.page-title h1')
    await expect(contain_Register).toContainText('Regis')

//10 To Have Value
    const email =  await page.locator('#Email')
    await email.fill('test@gmail.com')
    await expect(email).toHaveValue('test@gmail.com')

//10 to count 
    const day = await page.locator('select[name="DateOfBirthDay"] option')
    await expect(day).toHaveCount(32)

})
