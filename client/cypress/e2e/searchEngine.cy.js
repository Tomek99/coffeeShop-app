/// <reference types="Cypress" />

it("should display products under the search engine", () => {
  cy.visit("http://localhost:3000/");
  cy.get("#bs-search").click();
  cy.get("#search-form").click().type("Caffe").wait(1000).clear();
  cy.get("#btn-close-searcher").click();

  cy.get(".SearchEngine_PopupSearch__L5KQs").should("exist");
});
