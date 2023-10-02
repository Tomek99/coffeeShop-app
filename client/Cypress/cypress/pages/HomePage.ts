/// <reference types="Cypress" />

class HomePage {
  private elements = {
    productsPageBtn: () => cy.get("a").contains("Products"),

    userBtn: () => cy.get("#userNavigationBtn0"),

    cartBarBtn: () => cy.get("#cartBtnOpen132"),

    vieCartPageBtn: () => cy.get("#ViewCart"),
  };

  visitHomePage() {
    cy.visit("http://localhost:3000/");
  }

  openLoginPage() {
    this.elements.userBtn().click();
  }

  openProductsPage() {
    this.elements.productsPageBtn().click();
  }

  openCartBar() {
    this.elements.cartBarBtn().click({ force: true });
  }

  openViewCartPage() {
    this.elements.vieCartPageBtn().click();
  }
}

export default HomePage;
