it("should create new account", () => {
  cy.visit("http://localhost:3000/log-in");

  const email = "test12312@GoMail.com";
  const password = "Test122@k";

  cy.get(".LogIn_formInputs__jevb5 > :nth-child(1) > input").type(email);

  cy.get(".LogIn_formInputs__jevb5 > :nth-child(2)").type(password);
  cy.get(".LogIn_btnSignIn__Ow5dR").click();

  const isHomePage = "http://localhost:3000/log-in";
  cy.url().should("eq", isHomePage);
});
