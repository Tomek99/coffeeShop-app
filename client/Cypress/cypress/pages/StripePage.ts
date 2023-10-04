/// <reference types="Cypress" />

import { StripeData } from "../interfaces/stripeDataInterface";
import SuccessPage from "./SuccessPage";

class StripePage {
  private elements = {
    cardNumberInput: () => cy.get("#cardNumber"),

    cardExpiryInput: () => cy.get("#cardExpiry"),

    cardCvcInput: () => cy.get("#cardCvc"),

    billingName: () => cy.get("#billingName"),

    submitBtn: () => cy.get(".SubmitButton-IconContainer"),
  };

  fillStripeForm(data: StripeData): StripePage {
    this.elements.cardNumberInput().type(data.cardNumber);
    this.elements.cardExpiryInput().type(data.cardExipry);
    this.elements.cardCvcInput().type(data.cardCvc);
    this.elements.billingName().type(data.billingName);

    return new StripePage();
  }

  onClickSubmitBtn(): SuccessPage {
    this.elements.submitBtn().click();
    cy.wait(20000);

    return new SuccessPage();
  }
}

export default StripePage;
