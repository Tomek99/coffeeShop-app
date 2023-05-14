/// <reference types="Cypress" />

it("should display products under the search engine", () => {
  cy.visit("http://localhost:3000/");
  cy.get(".NavigationBar_btnSection__ehXll > :nth-child(1)").click();
  cy.get("#search-form").click().type("Caffe").wait(1000).clear();
  cy.get(".SearchEngine_divFlexEnd__WeQ7C > .BtnClose_btnClose__C-Gh0").click();
});
