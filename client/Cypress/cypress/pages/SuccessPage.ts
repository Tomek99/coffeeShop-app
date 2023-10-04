/// <reference types="Cypress" />

class SuccessPage {
  private elements = {
    textPaymentSuccessful: () => cy.get("div").contains("Payment Successful!"),
  };

  haveDisplayedText(): Cypress.Chainable<JQuery<HTMLDivElement>> {
    return this.elements.textPaymentSuccessful();
  }
}

export default SuccessPage;
