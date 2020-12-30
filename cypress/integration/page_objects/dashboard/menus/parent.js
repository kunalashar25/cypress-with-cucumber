import InvalidArgumentError from '../../../../../custom_errors/invalid_argument'

// menu locators
const MENU_COMPUTER = '(//a[normalize-space()="Computers"])[1]'
const MENU_ELECTRONICS = '(//a[normalize-space()="Electronics"])[1]'

class ParentMenu {

    /**
     * @description get parent menu locator
     * @param {string} value
     */
    static getMenu(value) {
        switch (value) {
            case "computers":
                return MENU_COMPUTER
                break;
            case "electronic":
                return MENU_ELECTRONICS
                break;
            default:
                throw new InvalidArgumentError('Invalid value provided for Parent Menu. Value:: ' + value)
        }
    }
}

export default ParentMenu