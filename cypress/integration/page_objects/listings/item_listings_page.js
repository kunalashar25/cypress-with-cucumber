import BasePage from "../base_page";

//const URL = base + "/software"

// page locators
const PAGE_TITLE = '.page-title'

class ItemListings extends BasePage {

    /**
     * @description Verify Header of the page
     * @param {string} value
     */
    verifyPageHeader(value) {
        this.getText(PAGE_TITLE).should('equal', value)
    }
}

export default ItemListings