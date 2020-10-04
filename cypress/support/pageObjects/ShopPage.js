class ShopPage {

    clickOnShopBtn() {
        const shopBtn = cy.get('ul.navbar-nav li:nth-child(2)')
        shopBtn.click()
        return shopBtn
    }

    getCommonProductTitle() {
        return cy.get('h4.card-title')
    }

    getCommonAddButton() {
        return cy.get('button.btn.btn-info')
    }

    validateUrlOnShopPage() {
        const url = cy.url().should('include', '/shop')
        return url
    }

    productNameInTheCart() {
        return cy.get('h4.media-heading a')

    }

    clickOnRemoveBtn() {
        return cy.get('button.btn.btn-danger').click()
    }

    clickOnContinueShoppingBtn() {
        return cy.get('button.btn.btn-default').click()
    }

    clickOnCheckoutBtn() {
        return cy.get('li.nav-item.active').click()
    }

    clickOnCheckOutBtnInTheCart() {
        return cy.get('button.btn.btn-success').click()
    }

    inputCountry(countryName) {
        const input = cy.get('input#country')
        input.type(countryName)
        return input
    }

    clickOnChosenCountry() {
        return cy.get('.suggestions >ul>li>a').click()
    }

    clickOnCheckBox() {
        return cy.get('#checkbox2').click({ force: true })
    }

    clickOnPurchaseBtn() {
        return cy.get('input[value="Purchase"]').click()
    }

    validateAlertMessage() {
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    }

}
export default ShopPage;