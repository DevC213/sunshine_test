const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * subpage containing specific selectors and methods for a specific page
 */
class StorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get loggedIn () {
        return $('.app_logo');
    }
    get Error(){
        return $('[data-test="error"]');
    }

}

module.exports = new StorePage();
