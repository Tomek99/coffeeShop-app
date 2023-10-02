/// <reference types="Cypress" />

class LoginPage {
  private elements = {
    emailInput: () => cy.get("input[name='email']"),

    passwordInput: () => cy.get("input[name='password']"),

    logInBtn: () => cy.get("button").contains("Log in"),
  };

  loginUser(login: string, password: string) {
    this.elements.emailInput().type(login);
    this.elements.passwordInput().type(password);
    this.elements.logInBtn().click();
  }
}
export default LoginPage;
