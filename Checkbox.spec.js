const {test, expect} = require('@playwright/test')

test('Checkbox', async({page})=> {

   await page.goto('https://demo.automationtesting.in/Register.html')
    
   /*Single checkbox
   page.locator("//input[@value='Cricket']").check();

   await expect(await page.locator("//input[@value='Cricket']")).toBeChecked()

   await expect(await page.locator("//input[@value='Movies']").isChecked()).toBeFalsy();
*/
   // Multiple Checkboxex

   const check1 =  page.locator("//input[@value='Cricket']")
   const check2 =  page.locator("//input[@value='Movies']")
   const check3 =  page.locator("//input[@value='Hockey']")

   const checkboxes = [check1,check2,check3]
 // select checkboxes
   for(const checkbox of checkboxes) 
   {
    await page.locator(checkbox).check();
   }
 // unselect checkboxes

 
   for(const checkbox of checkboxes) 
   {
    if(await page.locator(checkbox).isChecked())
    {
    await page.locator(checkbox).uncheck();
    }
   }

   await page.waitForTimeout(5000);

})
