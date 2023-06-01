import login_data from "../fixtures/login_data.json";

it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  cy.get("input[name='email']").type(login_data.email);
  cy.get("input[name='passwovrd']").type(login_data.password);

  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  cy.get(".Toastify__toast-body > :nth-child(2)").should("exist");
});
