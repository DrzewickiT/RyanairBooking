import { $, ElementFinder, browser, protractor } from 'protractor';

export class FlightSearch {
    private smartSearchContainer: ElementFinder;
    private oneWayFlight: ElementFinder;
    private fromField: ElementFinder;
    private toField: ElementFinder;
    private dayField: ElementFinder;
    private monthField: ElementFinder;
    private yearField: ElementFinder;
    private passengersDropdown: ElementFinder;
    private adultAddBtn: ElementFinder;
    private childrenAddBtn: ElementFinder;
    private termsCheckbox: ElementFinder;
    private proceedBtn: ElementFinder;

    constructor() {
        this.smartSearchContainer = $('smart-search.container');
        this.oneWayFlight = this.smartSearchContainer.$('input#flight-search-type-option-one-way ~ label span.rad');
        this.fromField = this.smartSearchContainer.$('div.col-departure-airport input.core-input');
        this.toField = this.smartSearchContainer.$('div.col-destination-airport input.core-input');
        this.dayField = this.smartSearchContainer.$('input.dd[aria-required=true]');
        this.monthField = this.smartSearchContainer.$('input.mm[aria-required=true]');
        this.yearField = this.smartSearchContainer.$('input.yyyy[aria-required=true]');
        this.passengersDropdown = this.smartSearchContainer.$('div.dropdown-handle');
        this.adultAddBtn = this.smartSearchContainer.$('div[value="paxInput.adults"] button.inc');
        this.childrenAddBtn = this.smartSearchContainer.$('div[value="paxInput.children"] button.inc');
        this.termsCheckbox = this.smartSearchContainer.$('span.terms-conditions-checkbox-span');
        this.proceedBtn = this.smartSearchContainer.$('button.core-btn-primary:last-of-type');
    }

    public setOneWay(): void {
        this.oneWayFlight.click();
    }

    public chooseFlight(departure: string, destination: string): void {
        this.setDeparture(departure);
        this.setDestination(destination);
    }

    private setDeparture(departure: string): void {
        this.fromField.clear();
        this.fromField.sendKeys(departure);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    private setDestination(destination: string): void {
        this.toField.clear();
        this.fromField.sendKeys(destination);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    public chooseDate(day: number, month: number, year: number): void {
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }

    private setDay(day: number): void {
        this.dayField.clear();
        this.dayField.sendKeys(day);
    }

    private setMonth(month: number): void {
        this.monthField.clear();
        this.monthField.sendKeys(month);
    }

    private setYear(year: number): void {
        this.yearField.clear();
        this.yearField.sendKeys(year);
    }

    public choosePassengers(adults: number, teens: number, children: number, infants: number): void {
        if (adults > 1) {
            this.setAdultsCount(adults);
        }
        if (teens > 0) {
            this.setTeensCount(teens);
        }
        if (children > 0) {
            this.setChildrenCount(children);
        }
        if (infants > 0) {
            this.setInfantsCount(infants);
        }
    }

    private setAdultsCount(adults: number): void {
        for (let i = 1; i < adults; i++) {
            this.adultAddBtn.click();
        }
    }

    private setTeensCount(teens: number): void {
        for (let i = 0; i < teens; i++) {
            //TODO
        }
    }

    private setChildrenCount(children: number): void {
        for (let i = 0; i < children; i++) {
            this.childrenAddBtn.click();
        }
    }

    private setInfantsCount(infants: number): void {
        for (let i = 0; i < infants; i++) {
            //TODO
        }
    }

    public acceptTerms(): void {
        this.termsCheckbox.click();
    }

    public proceed(): void {
        this.proceedBtn.click();
    }
}