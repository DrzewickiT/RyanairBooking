import { browser } from "protractor";
import { HomePage } from "../pages/home.po";
import { async } from "q";
const { Given, Then, When } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homepage: HomePage = new HomePage();

Given(/^I open homepage$/, async () => {
    expect(browser.getCurrentUrl()).to.eventually.equal(homepage.homepageAddress);
});

Then(/^I see page title$/, () => {
    expect(browser.getTitle()).to.eventually.equal("Official Ryanair website | Cheap flights from Ireland | Ryanair");
});



