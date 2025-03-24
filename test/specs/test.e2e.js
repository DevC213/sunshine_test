const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const CheckoutPage = require('../pageobjects/checkoutPage')

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
// describe('Negative Test', () => {
//     it('testInvalid', async () => {
//         await LoginPage.open()
//         await LoginPage.testLoginAllNegative()
//         await LoginPage.login('standarduser', 'secretsauce')
//         await expect(SecurePage.Error).toBeExisting()
//     })
// })
// describe('Positive Test', () => {
//     it('testValid', async () => {
//         await LoginPage.open()
//         await LoginPage.testLoginAllPositive()
//         await expect((SecurePage.loggedIn).toHaveText(expect.stringContaining('Products'))
//             || expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
//     })
// })
describe('Hamburger Menu', () => {
    it('testValid', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.goToCart()
        await LoginPage.HamburgerMenuTest()
    })
})
describe('Shopping Cart', () => {
    it('testValid', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.addAllToCart()
        await LoginPage.goToCart();
        await CheckoutPage.removeItems();
        await CheckoutPage.returnToItems.click();
        await LoginPage.goToCart();
        await CheckoutPage.checkOut.click();

    })
})