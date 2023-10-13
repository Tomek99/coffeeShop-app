/// <reference types="Cypress" />

import HomePage from "./HomePage";

class LoginPage {
  private elements = {
    emailInput: () => cy.get("input[name='email']"),

    passwordInput: () => cy.get("input[name='password']"),

    logInBtn: () => cy.get("button").contains("Log in"),

    headerLogin: () => cy.get("header").contains("Log in"),
  };

  loginUser(login: string, password: string): HomePage {
    this.elements.emailInput().type(login);
    this.elements.passwordInput().type(password);
    this.elements.logInBtn().click();

    return new HomePage();
  }

  getHeader() {
    return this.elements.headerLogin();
  }
}
export default LoginPage;
