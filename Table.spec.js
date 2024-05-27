const {test, expect} = require('@playwright/test')

test('Table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable')

// 1) total number of  rows and cols 

    const columns = await table.locator('thead tr th')
    console.log('No. of columns', await columns.count())
   
    const rows = await table.locator('tbody tr')
    console.log('No. of rows', await rows.count())

    //assertions
    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

// 2) Select checkbox for product 4 

    rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await machedRow.locator('input').check()


})