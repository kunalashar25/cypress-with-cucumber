Feature: Dashboard Page Content Verification

    Check components present on the Dashboard Page

    @subSuite("sanity") @severity("critical") @story("Dashboard-Navigation") @owner("kunal") @issue("jira","AC-1910")
    Scenario: Verify Navigation from Menus on Dashboard
        Given User is on "dashboard" page
        When User selects menu "software" from "computers"
        Then User lands on "Software" listing page

    @subSuite("regression") @severity("blocker") @story("Dashboard-Navigation") @owner("kunal") @issue("jira","AC-1912") @flaky
    Scenario: Verify Negative Scenario
        Given User is on "dashboard" page
        Then User lands on "Software" listing page

    @subSuite("sanity") @severity("critical") @story("Dashboard-Navigation") @owner("kunal") @issue("jira","AC-1911")
    Scenario: Verify Navigation from Menus on Dashboard 2
        Given User is on "dashboard" page
        When User selects menu "hardware" from "computers"
        Then User lands on "Software" listing page
