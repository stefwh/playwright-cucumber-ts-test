const reporter = require('cucumber-html-reporter');
const date = new Date();

const options = {
    theme: 'hierarchy',
    jsonFile: './reports/cucumber-html-reporter/cucumber_report.json',
    output: './reports/cucumber-html-reporter/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    storeScreenshots: true,
    screenshotsDirectory: './reports/cucumber-html-reporter/screenshots/',
    noInlineScreenshots: true,
    name: "Acceptance Test Report",
    brandTitle: date.toString().slice(0,34),
    metadata: {
        'Name': 'Acceptance Test Report',
        'Test instance': 'Acceptance',
        'Description': 'Verify if the system meets the agreed criteria on regular basis',
        'Browser': 'Chromium',
        'Testing tools': 'Cucumber + Playwright',
        'Platform': 'Windows 11',
        Executed: 'Remote'
    }
};

reporter.generate(options);
