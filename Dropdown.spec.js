const {test, expect}=require('@playwright/test')

test('Dropdown',async ({page})=> {

    await page.goto('https://demo.automationtesting.in/Register.html')
// Ways to select option

   // await page.locator('#Skills').selectOption({label: 'Adobe InDesign'}); //label /Visible Text

   // await page.locator('#Skills').selectOption('Adobe InDesign'); // visible text

   // await page.locator('#Skills').selectOption({value: 'AutoCAD'}); // By vlue
   
   // await page.locator('#Skills').selectOption({index: 1}); // By index

   //  await page.selectOption("#Skills",'AutoCAD')

//Assertions
// 1) check no. of options in a dropdown Approach 1
/*
   const options = await page.locator('#Skills option')

   await expect(options).toHaveCount(78)

   

// 2) check no. of options in a dropdown Approach 2

   const options = await page.$$('#Skills option')
    console.log("Number of options:", options.length)

    await expect(options.length).toBe(78)


//3 ) Check presence of values in a dropdown

    const content = await page.locator('#Skills').textContent()

    await expect(content.includes('AutoCAD')).toBeTruthy()

*/
//4) Check presence of value in the dropdown  - Approach 2

        
        const options = await page.$$('#Skills option')
        console.log(options)
        let status = false;

        for(const option of options) 
        {
            let value = await option.textContent();
            if(option.includes('AutoCAD')){
                status = true;
                break;
            }
            
        }
        await expect(status).toBeTruthy();


//5) select option from dropdown using loop
/*
const options = await page.$$('#Skills option')

for(const option of options) 
{
    let value = await option.textContent();

    if(value.includes('AutoCAD')){
       await page.selectOption('#Skill', value)
        break;
    }
    
}
await expect(status).toBeTruthy();

   

*/


})