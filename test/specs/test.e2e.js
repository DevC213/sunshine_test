const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/storePage')

describe('Sunshine Test', () => {
    it('Valid login credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.loggedIn).toBeExisting()
        await expect(SecurePage.loggedIn).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})

