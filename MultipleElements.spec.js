const { test,expect } = require('@playwright/test');
//Locate multiple web elements

//const elements = await page.$$(locator)

//Locate all links on page

test('LocateMultipleElements', async ({page})=> {

await page.goto('https://demoblaze.com/index.html');

/*const links = await page.$$('a');

for(const link of links) 
{
  const linktext = await link.textContent();
  console.log(linktext);
}*/

//page.waitForSelector("//*[@id='tbodyid']//div//h4/a");
const products = await page.$$("//*[@id='tbodyid']//div//h4/a")

for(const product of products)
{
  const productName = await product.textContent();
  console.log(productName);
}

})

