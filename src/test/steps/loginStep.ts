import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Page, Browser} from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
});

After(async function () {
    await browser.close();
});

Given('User navigates to the application', { timeout: 60 * 1000 }, async function () { 
    await page.goto("https://bookcart.azurewebsites.net/")
});

Given('User clicks on login link', async function () {
    await page.locator("//span[normalize-space(text())='Login']").click();
});

Given('User enters the username as {string}', async function (username: string) {
    await page.locator("input[formcontrolname='username']").fill(username);
});

Given('User enters the password as {string}', async function (password: string) {
    await page.locator("input[formcontrolname='password']").fill(password);
});

When('User clicks on the login button', async function () {
    await page.locator("(//button[@color='primary'])[3]").click();
});

Then('Login should be successful', async function () {
    const text = await page.locator("//span[normalize-space(text())='swtef']").textContent();
    console.log("Logged in successfully as user: " + text);
});

Then('Login should not be successful', async function () {
    // Code to verify unsuccessful login
    const errorMessage = await page.locator("mat-error.mat-mdc-form-field-error").textContent();
    await expect(errorMessage).toBe("Username or Password is incorrect.");
});
