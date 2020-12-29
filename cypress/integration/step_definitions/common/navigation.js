import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import DashboardPage from '../../page_objects/dashboard/dashboard_page';

Given('User is on {string} page', (pageName) => {
    switch (pageName) {
        case "dashboard":
            const dashboardPage = new DashboardPage()
            dashboardPage.open()
            break;

        default:
            cy.log('Unsupported page name provided. Page Name:: ' + pageName)
            break;
    }
})