const { test, expect } = require ('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Admin');
  await page.locator('#loginusername').dblclick();
  await page.locator('#loginusername').fill('pavanol');
  await page.getByLabel('Log in').getByText('Username: Password:').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Admin@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginpassword').click({
    clickCount: 3
  });
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});