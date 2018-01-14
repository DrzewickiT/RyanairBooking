import { browser, $ } from "protractor";

export class HomePage {
    public homepageAddress: string;
    
    constructor() {
        this.homepageAddress = browser.baseUrl;
    }

}