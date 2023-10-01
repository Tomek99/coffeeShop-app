/// <reference types="Cypress" />

class HomePage {
  private elements = {
    productsPageBtn: () => cy.get("a").contains("Products"),

    userBtn: () => cy.get("#userNavigationBtn0"),

    cartBarBtn: () => cy.get("#cartBtnOpen132"),

    vieCartPageBtn: () => cy.get("#ViewCart"),
  };

  onClickUserBtnOpen() {
    this.elements.userBtn().click();
  }
}

export default HomePage;
