
const {test, expect}=require('@playwright/test')

test('Handle Radio', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')

//Radio button

await page.locator("//input[@id='gender-male']").check();//male
    //await page.check("//input[@id='gender-male']")
    //await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();

await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();


await expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();
await page.waitForTimeout(5000);


})