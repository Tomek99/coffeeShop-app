/// <reference types="Cypress" />

it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  const email = "test12312@GoMail.com";
  const password = "Test122@k";

  // Login to account
  cy.get(".LogIn_formInputs__jevb5 > :nth-child(1) > input").type(email);
  cy.get(".LogIn_formInputs__jevb5 > :nth-child(2)").type(password);
  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  // Add products to cart

  cy.get(":nth-child(2) > .NavListElement_navLink__JIc6z").click();
  cy.get(
    ":nth-child(1) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
  ).click();
  cy.get(
    ":nth-child(2) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
  ).click();
  cy.get(
    ":nth-child(1) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(1)"
  ).click();

  cy.get(".ProductDetalis_productQuantity__oLOyA > div > :nth-child(3)").click({
    force: true,
  });
  cy.get(".BtnAddCart_btnAddCart__OQi3u").click();

  // Navigate to viewCart component and subtract first product

  cy.get(".NavigationBar_btnSection__ehXll > :nth-child(7)").click();
  cy.get(".BtnCart_btnCheckoutNow__U9yLJ").click();
  cy.get(
    ":nth-child(1) > .ProductItem_rightSide__12eiH > .ProductItem_selectMate__815UT > .ProductItem_dropdownEl__j3cqc"
  ).select("2", { force: true });
  cy.get(".BtnNavigateOrder_BtnNavigateOrder__MBTX2").click();

  // Complete deliver and payment data

  //   const isHomePage = "http://localhost:3000/log-in";
  //   cy.url().should("eq", isHomePage);
});
