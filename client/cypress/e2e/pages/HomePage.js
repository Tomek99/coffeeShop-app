/// <reference types="Cypress" />

class HomePage {
  visit() {
    cy.visit("http://localhost:3000/");
  }

  getProductsPage() {
    return cy.get("a").contains("Products");
  }

  getLogInPage() {
    return cy
      .get(".PopupUserNav2_btnSignIn_UpSection__ISAqm > :nth-child(1) > a")
      .contains("Log in");
  }

  getUserNavigationBar() {
    return cy.get("#userBtnOpen131");
  }

  getCartBar() {
    return cy.get("#cartBtnOpen132");
  }

  getViewCartPage() {
    return cy.get("#ViewCart");
  }
}

export default HomePage;
