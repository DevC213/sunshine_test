const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedIn () {
        return $('.app_logo');
    }
}

module.exports = new StorePage();
