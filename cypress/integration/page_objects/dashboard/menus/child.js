
const MENU_DESKTOP = '(//a[normalize-space()="Desktop"])[1]'
const MENU_SOFTWARE = '//img[contains(@title,"Software")]'

class ChildMenu{

    static getMenu(value) {
        switch (value) {
            case "desktop":
                return MENU_DESKTOP
                break;
            case "software":
                return MENU_SOFTWARE
                break;
            default:
                cy.log('Invalid value provided for Child Menu:: ' + value)
                break;
        }
    }
}

export default ChildMenu