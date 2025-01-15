import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';


Given('Navigate to the application', { timeout: 60 * 1000 }, async function () { 
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
});

Given('Click on login link', async function () {
    const loginLink = await pageFixture.page.locator("//span[normalize-space(text())='Login']");
    await loginLink.waitFor({ state: 'visible' });
    await loginLink.click();
});

Given('Enter the username as {string}', async function (username: string) {
    await pageFixture.page.locator("input[formcontrolname='username']").fill(username);
});

Given('Enter the password as {string}', async function (password: string) {
    await pageFixture.page.locator("input[formcontrolname='password']").fill(password);
});

When('Click on the login button', async function () {
    await pageFixture.page.locator("(//button[@color='primary'])[3]").click();
});

Then('Login is successful', async function () {
    const text = await pageFixture.page.locator("//span[normalize-space(text())='swtef']").textContent();
    console.log("Logged in successfully as user: " + text);
});

Then('Login is not successful', async function () {
    // Code to verify unsuccessful login
    const errorMessage = await pageFixture.page.locator("mat-error.mat-mdc-form-field-error").textContent();
    await expect(errorMessage).toBe("Username or Password is incorrect.");
});
