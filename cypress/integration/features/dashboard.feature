@feature("Dashboard_Verification") @epic("Dashboard_Epic")
Feature: Dashboard Page Content Verification
    Check components present on the Dashboard Page

    @subSuite("sanity") @severity("P0") @story("Dashboard") @owner("kunal") @issue(ac-1910)
    Scenario: Verify Navigation from Menus on Dashboard
        Given User is on "dashboard" page
        When User selects menu "software" from "computers"
        Then User lands on "Software" listing page

    @subSuite("regression") @severity("P1") @story("Dashboard") @owner("kunal") @issue(ac-1912)
    Scenario: Verify Negative Scenario
        Given User is on "dashboard" page
        Then User lands on "Software" listing page

    Scenario: Test
        Given User is at home <check>
            | Test | 123     | check    |
            | Test | abcswdc | sadcdsfd |
        When 
