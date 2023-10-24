/// <reference types="Cypress" />

import HomePage from "./HomePage";

class SignupPage {
  private elements = {
    firstNameInput: () => cy.get("input[name='firstName']"),

    lastNameInput: () => cy.get("input[name='lastName']"),

    emailInput: () => cy.get("input[name='email']"),

    passwordInput: () => cy.get("input[name='password']"),

    confirmPassowrdnput: () => cy.get("input[name='passwordConfirmation']"),

    checkAllInput: () => cy.get("input[name='checkAll']"),

    signupBtn: () => cy.get("button[type='submit']").contains("Sign up"),
  };

  fillRegisterForm(email: string): HomePage {
    this.elements.firstNameInput().type("Jan");
    this.elements.lastNameInput().type("Kowalski");
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type("Test1234@");
    this.elements.confirmPassowrdnput().type("Test1234@");
    this.elements.checkAllInput().click();

    this.elements.signupBtn().click();

    return new HomePage();
  }
}
export default SignupPage;
