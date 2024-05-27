const {test, expect}=require('@playwright/test')

test.skip('Alert with OK',async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling // Dialog window handler
  
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box')
        await dialog.accept();
    })

    await page.click('//*[@id="HTML9"]/div[1]/button[1]');
    await page.waitForTimeout(5000);
});
    //Confirmation Dialog

    test.skip('Confirmation with OK and Cancel', async ({page})=> {

        await page.goto('https://testautomationpractice.blogspot.com/');

        //Enabling Dialog window handler
      
        page.on('dialog',async dialog => {
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            await dialog.accept();
            //await dialog.dismiss();
        })
    
        await page.click('//*[@id="HTML9"]/div[1]/button[2]')

        await expect(page.locator('//*[@id="demo"]')).toHaveText('You pressed OK!')
        await page.waitForTimeout(5000);
});

// Prompt Dialog 

test('Prompt Dialog', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
  
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Princy');
       
    })

    await page.click('//*[@id="HTML9"]/div[1]/button[3]')

    await expect(page.locator('//*[@id="demo"]')).toHaveText('Hello Princy! How are you today?')
    await page.waitForTimeout(5000);
});