import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('Search for the book {string}', async (book: string) => {
    const searchedBook = pageFixture.page.locator("mat-option[role='option']")
    await pageFixture.page.locator("input[aria-label='search']").fill(book);
    await searchedBook.waitFor({ state: 'visible' });
    await searchedBook.click();
});

When('Add the book to the cart', async () => {
    await pageFixture.page.locator("//span[normalize-space(text())='Add to Cart']").click();
});

Then('The cart badge number is {string}', async (amount: string) => {
    await pageFixture.page.waitForTimeout(2000); // wait for 2 seconds
    const badgeElement = pageFixture.page.locator("#mat-badge-content-0");
    await badgeElement.waitFor({ state: 'visible' });
    const badgeCount = (await badgeElement.textContent());
    expect(badgeCount).toBe((amount));
});

When('Wait for {string} seconds', async (seconds: string) => {
    const milliseconds = Number(seconds) * 1000;
    await new Promise(resolve => setTimeout(resolve, milliseconds));
});