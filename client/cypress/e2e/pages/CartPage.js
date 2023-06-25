/// <reference types="Cypress" />

class CartPage {
  getCheckoutBtn() {
    return cy.get("a").contains("Checkout");
  }
}

export default CartPage;
