// <reference types="Cypress" />

class ViewCartPage {
  private elements = {
    checkoutBtn: () => cy.contains("Checkout"),
  };

  openCheckoutPage() {
    this.elements.checkoutBtn().click();
  }
}

export default ViewCartPage;
