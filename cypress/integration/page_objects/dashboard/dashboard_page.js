import BasePage from '../base_page'
import ParentMenu from './menus/parent'
import ChildMenu from './menus/child'

// should be base url in config
const URL = 'https://demo.nopcommerce.com/'

class DashboardPage extends BasePage {

    /**
     * @description go to dashboard page
     */
    open() {
        this.openPage(URL)
    }

    /**
     * @description select Menu item
     * @param {string} parent
     * @param {string} child
     */
    selectMenu(parent, child) {
        var parentLocator = ParentMenu.getMenu(parent)
        var childLocator = ChildMenu.getMenu(child)

        this.hoverAndClick(parentLocator, childLocator)
        this.clickWithXpath(childLocator)
    }
}

export default DashboardPage