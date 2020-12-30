/// <reference types="cypress" />

class BasePage {

    /**
     * @description Open page
     * @param {string} url
     */
    openPage(url) {
        cy.visit(url)
    }

    /**
     * @description Fill value on UI
     * @param {string} locator
     * @param {string} textToFill
     */
    fillText(locator, textToFill) {
        cy.get(locator).should('be.visible').should('be.enabled').clear().type(textToFill)
    }

    /**
     * @description Perform click action
     * @param {string} locator
     */
    click(locator) {
        cy.get(locator).should('be.visible').should('be.enabled').click()
    }

    /**
     * @description Perform click with xpath
     * @param {string | undefined} locator
     */
    clickWithXpath(locator) {
        cy.xpath(locator).should('be.visible').click()
    }

    /**
     * @description Hover on Parent and click on the child
     * @param {string} parentLocator
     * @param {string} childLocator
     */
    hoverAndClick(parentLocator, childLocator) {
        cy.xpath(parentLocator).should('be.visible').click()
    }

    /**
     * @description Get Text present in an element
     * @param {string} locator
     */
    getText(locator) {
        return cy.get(locator).should('be.visible').invoke('text')
    }
}
export default BasePage