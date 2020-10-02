class HomePage {

    getName() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    fillName(nameValue) {
        const field = cy.get('input[name="name"]:nth-child(2)')
        field.clear()
        field.type(nameValue)
        return field
    }

    fillEmail(emailValue) {
        const field = cy.get('input[name="email"]')
        field.clear()
        field.type(emailValue)
        return field
    }

    fillPassword(passwordValue) {
        const field = cy.get('input[type="password"]')
        field.clear()
        field.type(passwordValue)
        return field
    }

    getCheckBoxAndClick() {
        return cy.get('input#exampleCheck1').click()
    }

    selectGender() {
        const gender = cy.get('select#exampleFormControlSelect1')
        gender.select('Male')
        return gender
    }

    getEmploymentStatus() {
        const status = cy.get('input#inlineRadio2')
        status.check()
        return status
    }

    clickOnSubmitBtn() {
        const submit = cy.get('input[type="submit"]')
        submit.click()
        return submit
    }

    getTwoWayDataBinding() {
        const value = cy.get('input[name="name"]:nth-child(1)')
        return value
    }

    getAlertMessage() {
        return cy.get('div[class*="alert"]')

    }

    getEntrepreneur() {
        return cy.get('input#inlineRadio3')
    }

    checkTitlePage() {
        const titleText = cy.title()
        return titleText
    }

    clickOnShopBtn() {
        const shopBtn = cy.get('ul.navbar-nav li:nth-child(2)')
        shopBtn.click()
        return shopBtn
    }

}
export default HomePage;