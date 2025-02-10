// <reference types="Cypress" />

import { StripeData } from "../interfaces/stripeDataInterface";
import SuccessPage from "./SuccessPage";

const stipeFormData: StripeData = {
  cardNumber: "4242424242424242",
  cardExipry: "1234",
  cardCvc: "567",
  billingName: "Marcin Kowalski",
};

class StripePage {
  private elements = {
    cardNumberInput: () => cy.get("#cardNumber"),

    cardExpiryInput: () => cy.get("#cardExpiry"),

    cardCvcInput: () => cy.get("#cardCvc"),

    billingName: () => cy.get("#billingName"),

    submitBtn: () => cy.get(".SubmitButton-IconContainer"),
  };

  fillStripeForm(): StripePage {
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (
        err.message.includes("expressCheckout Element didn't mount normally")
      ) {
        return false; // Zignoruj błąd i nie przerywaj testu
      }
      return true; // Pozwól innym błędom powodować niepowodzenie testu
    });

    this.elements.cardNumberInput().type(stipeFormData.cardNumber);
    this.elements.cardExpiryInput().type(stipeFormData.cardExipry);
    this.elements.cardCvcInput().type(stipeFormData.cardCvc);
    this.elements.billingName().type(stipeFormData.billingName);

    return new StripePage();
  }

  clickOnSubmitBtn(): SuccessPage {
    this.elements.submitBtn().click();
    cy.wait(20000);

    return new SuccessPage();
  }
}

export default StripePage;
