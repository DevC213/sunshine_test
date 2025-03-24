const { $, expect} = require('@wdio/globals')
const Page = require('./page');
const url = require("node:url");

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
    get CartButtons(){
        return $('[class="btn btn_primary btn_small btn_inventory "]')
    }
    get shoppingCart(){
        return $('[class="shopping_cart_link"]')
    }
    get mainPage(){
        return $('[id="inventory_sidebar_link"]')
    }
    get aboutPage(){
        return $('[id="about_sidebar_link"]')
    }
    get resetPage(){
        return $('[id="reset_sidebar_link"]')
    }
    get ShopCartBadge(){
        return $('[class="shopping_cart_badge"]')
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
    async addAllToCart() {
        do {
            await this.CartButtons.click();
        }while(await this.CartButtons.isExisting());
        await expect(this.ShopCartBadge.exists());
    }
    async goToCart() {
        await this.shoppingCart.click();
        await expect(await browser.getUrl() === "https://www.saucedemo.com/cart.html")
    }
    open () {
        return super.open();
    }
    async HamburgerMenuTest(){
        await this.HamburgerMenu.click();
        await this.mainPage.click();
        await expect(await browser.getUrl() === "https://www.saucedemo.com/inventory.html")
        await this.HamburgerMenu.click();
        await this.aboutPage.click();
        await expect(await browser.getUrl() === "https://saucelabs.com/")
        await this.open();
        await this.login('standard_user', 'secret_sauce')
        await this.CartButtons.click();
        await expect(await this.ShopCartBadge.isExisting());
        await this.HamburgerMenu.click();
        await this.resetPage.click();
        await expect(!await this.ShopCartBadge.isExisting());
        await this.Logout.click();
    }

}

module.exports = new LoginPage();
