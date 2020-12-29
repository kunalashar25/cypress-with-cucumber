import BasePage from "../base_page";

//const URL = base + "/software"

// page locators
const PAGE_TITLE = '.page-title'

class ItemListings extends BasePage {

    verifyPageText(value) {
        this.getText(PAGE_TITLE).should('equal',value)
    }
}

export default ItemListings