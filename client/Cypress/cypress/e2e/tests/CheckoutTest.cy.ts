/// <reference types="Cypress" />

import HomePage from "../../pages/HomePage";

it("test", () => {
  cy.visit("http://localhost:3000/");

  new HomePage().onClickUserBtnOpen();
});
