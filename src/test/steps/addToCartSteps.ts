import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('user searches for a {string}', async (book: string) => {
    await pageFixture.page.locator("input[type='search']").fill(book);
    await pageFixture.page.locator("mat-option[role='option']").click();
});

When('User adds the book to the cart', async () => {
    await pageFixture.page.locator("//span[normalize-space(text())='Add to Cart']").click();
});

Then('the cart badge should get updated', async () => {
    const badgeCount = await pageFixture.page.locator("id=mat-badge-content-0").textContent();
    expect(parseInt(badgeCount || '0')).toBeGreaterThan(0);
});