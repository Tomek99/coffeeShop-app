/// <reference types="Cypress" />
import stripe_card from "../fixtures/stripe_card.json";

class StripePage {
  private elements = {
    fillStripeForm: () => {
      cy.get("button[type='submit']").click();
      for (const iterator of stripe_card)
        cy.get(iterator.element).type(iterator.value);
    },

    stripeSubmitBtn: () => cy.get(".SubmitButton-IconContainer"),
  };
}

export default StripePage;
