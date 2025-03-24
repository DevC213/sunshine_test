const { $, expect} = require('@wdio/globals')
const Page = require('./page');

/**
 * subpage containing specific selectors and methods for a specific page
 */
class checkoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get removeItem(){
        return $('[class="btn btn_secondary btn_small cart_button"]')
    }
    get returnToItems(){
        return $('[class="btn btn_secondary back btn_medium"]')
    }
    get checkOut(){
        return $('[class="btn btn_action btn_medium checkout_button "]')
    }
    async goToCheckout(){
        await this.checkoutPage.click();
        await expect(await browser.getUrl() === "https://www.saucedemo.com/checkout-step-one.html")
    }
    async removeItems(){
        while(await this.removeItem.isExisting()){
            await this.removeItem.click();
        }
        await expect(!await this.removeItem.isExisting());
    }
}

module.exports = new checkoutPage();