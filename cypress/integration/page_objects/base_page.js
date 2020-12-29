/// <reference types="cypress" />

class BasePage {

    // open specific page
    openPage(url) {
        cy.visit(url)
    }

    // fill text on UI
    fillText(locator, value) {
        cy.get(locator).should('be.visible').should('be.enabled').clear().type(value)
    }

    // perform click action
    click(locator) {
        cy.get(locator).should('be.visible').should('be.enabled').click()
    }

    clickWithXpath(locator){
        cy.xpath(locator).should('be.visible').click()
    }

    // hover and click on a child element
    hoverAndClick(parentLocator, childLocator) {
        cy.xpath(parentLocator).should('be.visible').click()
    }

    // Question: how to differentiate between xpath and get at runtime
    // How to work with mousehover?

    // to get text of the element
    getText(locator){
        return cy.get(locator).should('be.visible').invoke('text')
    }
}
export default BasePage