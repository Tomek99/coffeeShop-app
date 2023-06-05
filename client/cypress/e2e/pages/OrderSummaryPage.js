/// <reference types="Cypress" />

class OrderSummaryPage {
  getPurchaseBtn() {
    return cy.get("button[type='submit']").contains("Purchase and pay");
  }
}

export default OrderSummaryPage;
