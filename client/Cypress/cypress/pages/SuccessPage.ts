/// <reference types="Cypress" />

class SuccessPage {
  private elements = {
    successText: () =>
      cy.wait(20000).get("div").contains("Payment Successful!"),
  };
}

export default SuccessPage;
