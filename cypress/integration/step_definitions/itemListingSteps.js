import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ItemListing from '../page_objects/listings/item_listings_page'

const itemListing = new ItemListing()

Then('User lands on {string} listing page', (pageName) => {
    itemListing.verifyPageText(pageName)
})