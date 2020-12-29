import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../page_objects/login/login_page"

const loginPage = new LoginPage()

When('User enters {string} and {string}', (username, password) => {
    loginPage.enterCredentials(username, password)
    loginPage.login()
})

Then('User receives {string}', (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage)
})