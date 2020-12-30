import BasePage from "../base_page";

const URL = 'https://demo.nopcommerce.com/login' // convert to base + /login

// page locators
const USERNAME_TEXTBOX = ".email"
const PASSWORD_TEXTBOX = ".password"
const LOGIN_BUTTON = ".login-button"
const EMAIL_ERROR = ".message-error"

class LoginPage extends BasePage {

    /**
     * @description open login page  
     */ 
    open() {
        this.openPage(URL)
    }

    /**
     * @description fill usernamen and password
     * @param {string} username
     * @param {string} password
     */
    enterCredentials(username, password) {
        this.fillText(USERNAME_TEXTBOX, username)
        this.fillText(PASSWORD_TEXTBOX, password)
    }

    /**
     * @description perform login
     */
    login() {
        this.click(LOGIN_BUTTON)
    }

    /**
     * @description check error message
     * @param {string} message
     */
    verifyErrorMessage(message) {
        this.getText(EMAIL_ERROR).should('equal', message)
    }
}

export default LoginPage