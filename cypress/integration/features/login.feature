Feature: Login Page Validation

    To test login module for user interaction

    @subSuite("sanity") @severity("P0") @story("Login-Validation") @owner("kunal")
    Scenario Outline: Validate Login Operation to meet user requirement
        Given User is on "login" page
        When User enters "<username>" and "<password>"
        Then User receives "<error message>"
        Examples:
            | username       | password | error message                                                    |
            | test@gmail.com | pass@123 | Login was unsuccessful. Please correct the errors and try again. |
            | test@gmail.com | pass@123 | No customer account found                                        |