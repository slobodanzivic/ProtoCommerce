class HomePage {

    getName() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmail() {
        return cy.get('input[name="email"]')
    }

    getPassword() {
        return cy.get('input[type="password"]')
    }

    getCheckBox() {
        return cy.get('input#exampleCheck1')
    }

    getGender() {
        return cy.get('select#exampleFormControlSelect1')
    }

    getEmploymentStatus() {
        return cy.get('input#inlineRadio2')
    }

    getEntrepreneur() {
        return cy.get('input#inlineRadio3')
    }

    getSubmitBtn() {
        return cy.get('input[type="submit"]')
    }

    getTwoWayDataBinding() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getAlertMessage() {
        return cy.get('div[class*="alert"]')

    }

    getShopBtn() {
        return cy.get('ul.navbar-nav li:nth-child(2)')
    }

}
export default HomePage;