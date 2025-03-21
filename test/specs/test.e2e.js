const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/storePage')

// describe('Sunshine Test', () => {
//     it('Valid login credentials', async () => {
//         await LoginPage.open()
//
//         await LoginPage.login('standard_user', 'secret_sauce')
//         await expect(SecurePage.loggedIn).toBeExisting()
//         await expect(SecurePage.loggedIn).toHaveText(
//             expect.stringContaining('Swag Labs'))
//     })
// })
describe('Negative Test', () => {
    it('testInvalid', async () => {
        await LoginPage.open()
        await LoginPage.testLoginAllNegative()
        await LoginPage.login('standarduser', 'secretsauce')
        await expect(SecurePage.Error).toBeExisting()
    })
})
describe('Positive Test', () => {
    it('testValid', async () => {
        await LoginPage.open()
        await LoginPage.testLoginAllPositive()
        await expect((SecurePage.loggedIn).toHaveText(expect.stringContaining('Swag Labs'))
            || expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
    })
})
