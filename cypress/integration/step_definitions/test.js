import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://demo.nopcommerce.com/login?returnUrl=%2F";

Given('User is on login page', () => {
    cy.visit(url)
})

Then('User see login button', () => {
    cy.get('.login-button').should('be.visible')
})