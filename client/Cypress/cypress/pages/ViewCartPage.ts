/// <reference types="Cypress" />

class ViewCartPage {
  private elements = {
    checkoutBtn: () => cy.get("a").contains("Checkout"),
  };

  openCheckoutPage() {
    this.elements.checkoutBtn().click();
  }
}

export default ViewCartPage;
