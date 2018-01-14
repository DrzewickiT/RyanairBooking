import { browser } from "protractor";
import { HomePage } from "../pages/home.po";
const { Given, Then, When } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const homepage: HomePage = new HomePage();

Given(/^I open homepage$/, () => {
    browser.get(homepage.homepageAddress);
});

Then(/^I see page title$/, () => {
    expect(browser.getTitle()).to.equal("Official Ryanair website");
});



