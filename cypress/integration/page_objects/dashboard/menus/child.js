import InvalidArgumentError from '../../../../../custom_errors/invalid_argument'

// menu locators
const MENU_DESKTOP = '(//a[normalize-space()="Desktop"])[1]'
const MENU_SOFTWARE = '//img[contains(@title,"Software")]'

class ChildMenu{

    /**
     * @description get child menu locator
     * @param {string} value
     */
    static getMenu(value) {
        switch (value) {
            case "desktop":
                return MENU_DESKTOP
                break;
            case "software":
                return MENU_SOFTWARE
                break;
            default:
                throw new InvalidArgumentError('Invalid value provided for Child Menu. Value:: ' + value)
        }
    }
}

export default ChildMenu