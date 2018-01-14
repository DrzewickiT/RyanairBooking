const { BeforeAll, After, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 60 * 1000}, () => {
    browser.get(config.baseUrl);
}); 

After(function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        console.log("asfjkghaskjfhaskjfhajsklf ????????>ZXZX");
         const screenShot = browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});