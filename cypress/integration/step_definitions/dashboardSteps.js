import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from "../page_objects/dashboard/dashboard_page";

const dashboardPage = new DashboardPage()

When('User selects menu {string} from {string}', (childMenu, parentMenu) => {
    dashboardPage.selectMenu(parentMenu, childMenu)
})