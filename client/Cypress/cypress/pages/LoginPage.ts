/// <reference types="Cypress" />

class LoginPage {
  private elements = {
    emailInput: () => cy.get("input[name='email']"),

    passwordInput: () => cy.get("input[name='password']"),

    logInBtn: () => cy.get("button").contains("Log in"),
  };
}
export default LoginPage;
