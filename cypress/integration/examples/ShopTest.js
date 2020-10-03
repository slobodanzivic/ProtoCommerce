///<reference types="Cypress"/>
import ShopPage from '../../support/pageObjects/ShopPage'

describe('Shop Test', function () {

    const shopPage = new ShopPage()

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })

    it('Go to shop', function () {
        shopPage.clickOnShopBtn()
        shopPage.validateUrlOnShopPage()

    })

    it('Adding Blackberry to cart', function () {
        shopPage.clickOnShopBtn()
        cy.get('h4.card-title').each(($el, index, $list) => {
            if ($el.text().includes('Blackberry')) {

                cy.get('button.btn.btn-info').eq(index).click()
            }
        })

    })

    it('Select Product', function () {
        shopPage.clickOnShopBtn()
        cy.selectProduct('Nokia Edge')
    })

    it('Verify whether Nokia Edge is in the cart', function () {
        shopPage.clickOnShopBtn()
        cy.selectProduct('Nokia Edge')
        shopPage.clickOnCheckoutBtn()
        shopPage.productNameInTheCart().should('have.text', 'Nokia Edge')
    })

    it('Remove product from cart', function () {
        shopPage.clickOnShopBtn()
        cy.selectProduct('iphone X')
        shopPage.clickOnCheckoutBtn()
        shopPage.clickOnRemoveBtn()
        shopPage.productNameInTheCart().should('not.be.visible')

    })

    it('Remove product from cart and Continue Shoping', function () {
        shopPage.clickOnShopBtn()
        cy.selectProduct('iphone X')
        shopPage.clickOnCheckoutBtn()
        shopPage.clickOnRemoveBtn()
        shopPage.productNameInTheCart().should('not.be.visible')
        shopPage.clickOnContinueShoppingBtn()
        cy.selectProduct('Samsung Note 8')
        shopPage.clickOnCheckoutBtn()
        shopPage.clickOnCheckOutBtnInTheCart()
        shopPage.inputCountry('India')
        cy.wait(3000)
        shopPage.clickOnChosenCountry()
        shopPage.clickOnCheckBox()
        shopPage.clickOnPurchaseBtn()
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})