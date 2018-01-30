import { browser } from 'protractor';
import { HomePage } from '../pages/home.po';
import { LoginModal } from '../pages/components/login.co';
import { async } from 'q';
import { userData } from '../data/userdata';
import { FlightSearch } from '../pages/components/flightSearch.co';
const { Given, Then, When } = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const homepage: HomePage = new HomePage();
const flightSearch: FlightSearch = new FlightSearch();

Given(/^I am on homepage$/, () => {
    expect(browser.getCurrentUrl()).to.eventually.equal(homepage.homepageAddress);
});

Given(/^I am logged-in$/, () => {
    homepage.openLoginDialog().login(userData.username, userData.password);
    expect(homepage.isAvatarDisplayed()).to.eventually.equal(true);
});

When(/^I set one way flight$/, () => {
    flightSearch.setOneWay();
});

When(/^I set departure from (.*) and destination (.*)$/, (departure: string, destination: string) => {
    flightSearch.chooseFlight(departure, destination);
});

When(/^I choose day (.*) month (.*) year (.*)$/, (day: number, month: number, year: number) => {
    flightSearch.chooseDate(day, month, year);    
});

When(/^I set passengers as (.*) adults, (.*) teens, (.*) children and (.*) infants$/, (adults: number,
    teens: number, children: number, infants: number) => {
    flightSearch.choosePassengers(adults, teens, children, infants);
});

When(/^I click accept terms$/, () => {
    flightSearch.acceptTerms();
});

When(/^I click proceed button$/, () => {
    flightSearch.proceed();
    browser.sleep(20000);
});