/// <reference types="Cypress" />

import { StripeData } from "../interfaces/stripeDataInterface";

class StripePage {
  private elements = {
    cardNumberInput: () => cy.get("#cardNumber"),

    cardExpiryInput: () => cy.get("#cardExpiry"),

    cardCvcInput: () => cy.get("#cardCvc"),

    billingName: () => cy.get("#billingName"),

    submitBtn: () => cy.get(".SubmitButton-IconContainer"),
  };

  fillForm(data: StripeData): StripePage {
    this.elements.cardNumberInput().type(data.cardNumber);
    this.elements.cardExpiryInput().type(data.cardExipry);
    this.elements.cardCvcInput().type(data.cardCvc);
    this.elements.billingName().type(data.billingName);

    return new StripePage();
  }

  onClickSubmitBtn() {
    this.elements.submitBtn().click();
  }
}

export default StripePage;
