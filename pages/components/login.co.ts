import { $, ElementFinder } from 'protractor';
import { waitForInvisibilityOf, waitForVisibilityOf } from '../../utilities/expectedConditions';
import { HomePage } from '../home.po';

export class LoginModal {
    private loginDialog: ElementFinder;
    private loginContainer: ElementFinder;
    private usernameField: ElementFinder;
    private passwordField: ElementFinder;
    private loginBtn: ElementFinder;

    constructor() {
        this.loginDialog = $('div.dialog-body');
        this.loginContainer = this.loginDialog.$('.modal-form-container');
        this.usernameField = this.loginContainer.$('input[type=email]');
        this.passwordField = this.loginContainer.$('input[type=password]');
        this.loginBtn = this.loginContainer.$('button-spinner button');
    }

    public login(username: string, password: string): void {
        waitForVisibilityOf(this.loginContainer, 5000);
        this.typeUsername(username);
        this.typePassword(password);
        this.loginBtn.click();
        waitForInvisibilityOf(this.loginDialog);
    }

    private typeUsername(username: string): void {
        this.usernameField.clear();
        this.usernameField.sendKeys(username);            
    }

    private typePassword(password: string): void {
        this.passwordField.clear();
        this.passwordField.sendKeys(password);
    }
}