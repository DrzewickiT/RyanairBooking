import { $ } from "protractor";
import { config } from "../config/config";

export class HomePage {
    public homepageAddress: string;
    
    constructor() {
        this.homepageAddress = config.baseUrl;
    }

}