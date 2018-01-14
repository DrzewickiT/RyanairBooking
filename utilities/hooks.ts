const { BeforeAll, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 60 * 1000}, async () => {
    await browser.get(config.baseUrl);
}); 

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        const attach = this.attach;
        return browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return attach(decodedImage, "image/png");
});
    }
});