///<reference types="Cypress"/>
import ShopPage from '../../support/pageObjects/ShopPage'

describe('Shop Test', function () {

    const shopPage = new ShopPage()

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function (data) {
            this.data = data
        })
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
        shopPage.validateAlertMessage()
    })

    it('Adding multiple product to the cart', function () {
        shopPage.clickOnShopBtn()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        shopPage.clickOnCheckoutBtn()
        shopPage.productNameInTheCart().should('have.length', '3')
      

    })
})