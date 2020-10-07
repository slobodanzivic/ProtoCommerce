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

    it('Adding multiple products to the cart', function () {
        shopPage.clickOnShopBtn()
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        shopPage.clickOnCheckoutBtn()
        shopPage.productNameInTheCart().should('have.length', '2')

    })

    it('Sum of 2 products', function () {
        shopPage.clickOnShopBtn()
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        shopPage.clickOnCheckoutBtn()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const price = $el.text()
            let result = price.split(" ")
            result = result[1].trim()
            sum = Number(sum) + Number(result)
        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (element) {
            const price = element.text()
            let result = price.split(" ")
            let totalSum = result[1].trim()
            cy.log(totalSum)

            expect(Number(totalSum)).to.equal(sum)
        })
    })
})



