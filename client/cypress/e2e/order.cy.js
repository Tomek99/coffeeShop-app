/// <reference types="Cypress" />
import order_address from "../fixtures/order_address.json";
import stripe_card from "../fixtures/stripe_card.json";
import login_data from "../fixtures/login_data.json";

it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  // Login to account
  cy.get(".LogIn_formInputs__jevb5 > :nth-child(1) > input").type(
    login_data.email
  );
  cy.get(".LogIn_formInputs__jevb5 > :nth-child(2)").type(login_data.password);
  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  // Add products to cart
  cy.get(":nth-child(2) > .NavListElement_navLink__JIc6z").click({
    force: true,
  });

  const amountProducts = Math.floor(Math.random() * 5) + 1;

  for (let index = 0; index < amountProducts; index++) {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    cy.get(
      `:nth-child(${randomNumber}) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)`
    ).click({ force: true });
  }

  // Navigate to viewCart component and subtract first product
  cy.get(".NavigationBar_btnSection__ehXll > :nth-child(7)").click();
  cy.get(".BtnCart_btnCheckoutNow__U9yLJ").click();
  cy.get(
    ":nth-child(1) > .ProductItem_rightSide__12eiH > .ProductItem_selectMate__815UT > .ProductItem_dropdownEl__j3cqc"
  ).select("2", { force: true });
  cy.get(".BtnNavigateOrder_BtnNavigateOrder__MBTX2").click();

  // Complete deliver and payment data
  cy.get(
    ".Delivery_fieldsetInputs__s87Cq > :nth-child(1) > .InputRadio_labelRadio__FYjlB"
  ).click();
  cy.get(
    ".Shopper_fieldsetInputs__E3G4X > :nth-child(1) > .InputRadio_labelRadio__FYjlB"
  ).click();

  let number = 1;
  for (const key in order_address) {
    cy.get(`:nth-child(${number}) > .FieldComponent_inputText__GNSZj`).type(
      order_address[key]
    );
    number++;
  }

  cy.get(
    ".Payment_fieldsetInputs__MVsFm > :nth-child(1) > .InputRadio_labelRadio__FYjlB"
  ).click();

  // Navigate to summary
  cy.get(".BtnNavigateOrder_BtnNavigateOrder__MBTX2").click();

  // Navigate to stripe
  cy.get(".BtnPurchasePay_BtnPurchasePay__wX0HE").click();

  // Stripe form
  for (const iterator of stripe_card) {
    cy.get(iterator.element).type(iterator.value);
  }
  cy.get(".SubmitButton-IconContainer").click();
  // asseration

  cy.wait(20000);
  cy.get(".PaymentSuccess_PaymentSuccessful__KkTI7").should("exist");
});
