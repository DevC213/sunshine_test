const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    userNames = ["standard_user", "problem_user",
                            "performance_glitch_user", "error_user","visual_user", "locked_out_user"]
    get Username () {
        return $('#user-name');
    }
    get Password () {
        return $('#password');
    }
    get submitButton () {
        return $('input[type="submit"]');
    }
    get HamburgerMenu(){
        return $('#react-burger-menu-btn')
    }
    get Logout(){
        return $('#logout_sidebar_link');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {

        await this.Username.setValue(username);
        await this.Password.setValue(password);
        await this.submitButton.click();
    }
    async testLoginAllNegative() {
        for (let i = 0; i < this.userNames.length; i++) {
            await this.Username.setValue(this.userNames[i]);
            await this.Password.setValue("testPassword");
            await this.submitButton.click();
        }
    }
    async testLoginAllPositive() {
        for (let i = 0; i < this.userNames.length; i++) {
            await this.Username.setValue(this.userNames[i]);
            await this.Password.setValue("secret_sauce");
            if (await browser.isAlertOpen()) {
                await browser.acceptAlert();
            }
            await this.submitButton.click();
            if(await this.HamburgerMenu.isExisting()) {
                await this.HamburgerMenu.click();
                await this.Logout.click();
            }
        }
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
