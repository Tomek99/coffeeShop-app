import login_data from "../fixtures/login_data.json";

it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  cy.get(".LogIn_formInputs__jevb5 > :nth-child(1) > input").type(
    login_data.email
  );
  cy.get(".LogIn_formInputs__jevb5 > :nth-child(2)").type(login_data.password);

  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  cy.get(".Toastify__toast-body > :nth-child(2)").should("exist");
});
