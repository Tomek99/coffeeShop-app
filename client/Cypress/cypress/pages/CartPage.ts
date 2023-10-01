/// <reference types="Cypress" />

class CartPage {
  private elements = {
    checkoutBtn: () => cy.get("a").contains("Checkout"),
  };
}

export default CartPage;
