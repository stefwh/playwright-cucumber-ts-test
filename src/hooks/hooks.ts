import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";   
import { chromium, Browser, BrowserContext} from 'playwright';
import { pageFixture } from './pageFixture';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function ({ pickle, result }: { pickle: any, result?: any }) {
    if (result?.status === Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./reports/cucumber-html-reporter/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});