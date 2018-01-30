import { $, ElementFinder, promise } from 'protractor';
import { config } from '../config/config';
import { LoginModal } from '../pages/components/login.co';

export class HomePage {
    public homepageAddress: string;
    private loginLink: ElementFinder;
    private userAvatar: ElementFinder;
    
    constructor() {
        this.homepageAddress = config.baseUrl;
        this.loginLink = $('#myryanair-auth-login span.username');
        this.userAvatar = $('div.avatar-user');
    }

    public openLoginDialog(): LoginModal {
        this.loginLink.click();
        return new LoginModal();
    }

    public isAvatarDisplayed(): promise.Promise<boolean> {
        return this.userAvatar.isDisplayed();
    }
}