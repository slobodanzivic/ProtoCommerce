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
})