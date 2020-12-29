import BasePage from '../base_page'
import ParentMenu from './menus/parent'
import ChildMenu from './menus/child'

// should be base url in config
const URL = 'https://demo.nopcommerce.com/'

class DashboardPage extends BasePage {

    // load dashabord page
    open() {
        this.openPage(URL)
    }

    // select Menu item
    selectMenu(parent, child) {
        var parentLocator = ParentMenu.getMenu(parent)
        var childLocator = ChildMenu.getMenu(child)

        this.hoverAndClick(parentLocator, childLocator)
        this.clickWithXpath(childLocator)
    }
}

export default DashboardPage