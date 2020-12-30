/// <reference types="cypress" />

class BasePage {

    /**
     * @description Locate element based on locator value
     * @param {string} locator
     */
    getElement(locator) {
        if (locator.startsWith('.') || locator.startsWith('#'))
            return cy.get(locator)
        else
            return cy.xpath(locator)
    }

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
        this.getElement(locator).should('be.visible').should('be.enabled').clear().type(textToFill)
    }

    /**
     * @description Perform click action
     * @param {string} locator
     */
    click(locator) {
        this.getElement(locator).should('be.visible').click()
    }

    /**
     * @description Hover on Parent and click on the child
     * @param {string} parentLocator
     * @param {string} childLocator
     */
    hoverAndClick(parentLocator, childLocator) {
        this.getElement(parentLocator).should('be.visible').click()
    }

    /**
     * @description Get Text present in an element
     * @param {string} locator
     */
    getText(locator) {
        return this.getElement(locator).should('be.visible').invoke('text')
    }
}
export default BasePage