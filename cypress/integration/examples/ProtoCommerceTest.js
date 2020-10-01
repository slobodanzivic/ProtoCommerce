///<reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage.js'

describe('ProtoCommerce Test', function () {

    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })

    it('Visit the https://rahulshettyacademy.com/angularpractice/ ', function () {

        cy.url().should('equal', 'https://rahulshettyacademy.com/angularpractice/')
    })

    it('Successful filling the form', function () {
        //homePage.getName().type('Slobodan').should('have.value', 'Slobodan')
        homePage.fillName('Slobodan').should('have.value', 'Slobodan')
        
        //homePage.getEmail().type('slobodan.m.zivic@gmail.com').should('have.value', 'slobodan.m.zivic@gmail.com')
        homePage.fillEmail('slobodan.m.zivic@gmail.com').should('have.value', 'slobodan.m.zivic@gmail.com')
        
        homePage.getPassword().type('Test123456').should('have.value', 'Test123456')
        homePage.getCheckBox().click()
        homePage.getGender().select('Male').should('have.value', 'Male')
        homePage.getEmploymentStatus().check().should('be.checked')
        homePage.getSubmitBtn().click()

    })

    it('Whether the same input value is in the next fields "Name" and "Two-way Data Binding example"', function () {
        homePage.getName().type('Slobodan').should('have.value', 'Slobodan')
        homePage.getTwoWayDataBinding().should('have.value', 'Slobodan')
    })

    it('Whether Entrepreneur radio button is disabled', function () {
        homePage.getEntrepreneur().should('be.disabled')
    })

    it('Whether the input field has a value of minlength 2', function () {
        homePage.getName().should('have.attr', 'minlength', '2')
    })

    it('Page title', function () {
        cy.title().should('equal', 'ProtoCommerce')
    })
})

