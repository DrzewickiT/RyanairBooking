import { protractor, ElementFinder, browser } from 'protractor';

const EC = protractor.ExpectedConditions;

export function waitForInvisibilityOf(element: ElementFinder, timeout = 2000, message?: string) {
    return browser.wait(EC.invisibilityOf(element), timeout, message);
}

export function waitForVisibilityOf(element: ElementFinder, timeout = 2000, message?: string) {
    return browser.wait(EC.visibilityOf(element), timeout, message);
}