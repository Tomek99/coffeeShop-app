/// <reference types="Cypress" />

class LogInPage {
  getEmailInput() {
    return cy.get("input[name='email']");
  }

  getPasswordInput() {
    return cy.get("input[name='password']");
  }

  getLogInBtn() {
    return cy.get("button").contains("Log in");
  }
}

export default LogInPage;
