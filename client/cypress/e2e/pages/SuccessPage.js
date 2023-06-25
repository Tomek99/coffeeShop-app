/// <reference types="Cypress" />

class SuccessPage {
  getSuccessText() {
    return cy.wait(20000).get("div").contains("Payment Successful!");
  }
}

export default SuccessPage;
