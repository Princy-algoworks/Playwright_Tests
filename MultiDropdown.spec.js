const {test, expect}=require('@playwright/test')

test('Dropdown',async ({page})=> {

//select multiple options

await page.goto('https://testautomationpractice.blogspot.com/')
//await page.selectOption('#colors', ['Red', 'Yellow', 'Blue'])

// check no. of options

/*const option = await page.locator('#colors option')
await expect(option).toHaveCount(5)

// check no. of options in an array

const options = await page.$$('#colors option')

console.log("Number of options", options.length)

await expect(options.length).toBe(5);


*/

// check presence of value

const options = await page.locator('#colors')
await expect(content.includes('Blue')).toBeTruthy()

await page.waitForTimeout(5000);


})