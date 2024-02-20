import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given('I open Google homepage', () => {
  cy.visit('https://www.google.com');
});

Then('I should see the search input field', () => {
  cy.get('input').should('exist');
});
