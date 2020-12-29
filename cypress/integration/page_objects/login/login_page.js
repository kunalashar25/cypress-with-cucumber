import BasePage from "../base_page";

const URL = 'https://demo.nopcommerce.com/login' // convert to base + /login

// page locators
const USERNAME_TEXTBOX = ".email"
const PASSWORD_TEXTBOX = ".password"
const LOGIN_BUTTON = ".login-button"
const EMAIL_ERROR = ".message-error"

class LoginPage extends BasePage {

    // open login page
    open() {
        this.openPage(URL)
    }

    // fill usernamen and password
    enterCredentials(username, password) {
        this.fillText(USERNAME_TEXTBOX, username)
        this.fillText(PASSWORD_TEXTBOX, password)
    }

    // perform login
    login() {
        this.click(LOGIN_BUTTON)
    }

    // check error message
    verifyErrorMessage(message) {
        this.getText(EMAIL_ERROR).should('equal', message)
    }
}

export default LoginPage