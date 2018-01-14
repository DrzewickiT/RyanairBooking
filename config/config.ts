import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../utilities/reporter";
const jsonReports = process.cwd() + "/reports/json";

export let config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "https://www.google.com/ncr",
    capabilities: {
      browserName: process.env.TEST_BROWSER_NAME || "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../../features/*.feature"],

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
        strict: true,
        tags: "@BookingScenario"
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    }
}