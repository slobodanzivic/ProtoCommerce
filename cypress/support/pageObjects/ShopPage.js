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

}
export default ShopPage;