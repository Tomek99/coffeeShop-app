/// <reference types="Cypress" />
import order_address from "../fixtures/order_address.json";
import stripe_card from "../fixtures/stripe_card.json";
import login_data from "../fixtures/login_data.json";

it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  // Login to account
  cy.get('input[name="email"]').type(login_data.email);
  cy.get('input[name="password"]').type(login_data.password);
  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  // Navigate to products page
  cy.get("a").contains("Products").click({ force: true });

  // Add random products to cart
  const amountProducts = Math.floor(Math.random() * 5) + 2;
  for (let index = 0; index < amountProducts; index++) {
    const randomNumber = Math.floor(Math.random() * 12) + 0;
    cy.get(`#cartFillId${randomNumber}`).click({ force: true });
  }

  // Navigate to viewCart component and delete random product in viewCart
  cy.get("#ViewCart").click({ force: true });
  cy.get(".FillCart_items__5fPud")
    .find(".ProductItem_Item__Wrqrs")
    .then(($products) => {
      // get random product in the viewCart
      const productNumber = Math.floor(Math.random() * $products.length) + 0;
      cy.get(`#imBinIdViewCart${productNumber}`).click({ force: true });
    });

  cy.get("a[href='/cart']").contains("View my cart").click();
  cy.get("a[href='/order']").click();

  // Complete deliver and payment data
  cy.get('label[for="carrier"]').click();
  cy.get('label[for="privatePerson"]').click();

  let number = 1;
  for (const key in order_address) {
    cy.get(`input[name=${key}]`).type(order_address[key]);
    number++;
  }
  cy.get('label[for="online_payment"]').click();

  // Navigate to summary
  cy.get("button[type='submit']").click();

  // Navigate to stripe and complete the Stripe form
  cy.get("button[type='submit']").click();
  for (const iterator of stripe_card)
    cy.get(iterator.element).type(iterator.value);

  // Navigate to success page
  cy.get(".SubmitButton-IconContainer").click();

  cy.wait(20000)
    .get(".PaymentSuccess_PaymentSuccessful__KkTI7")
    .should("exist")
    .and("have.text", "Payment Successful!");
});
