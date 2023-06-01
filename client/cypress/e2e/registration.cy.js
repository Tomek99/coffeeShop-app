it("should create new account", () => {
  cy.visit("http://localhost:3000/sign-up");

  const name = "Tomasz";
  const lastName = "Kowalski";
  const email = "test12312@GoMail.com";
  const password = "Test122@k";

  cy.get("input[name='firstName']").type(name);
  cy.get("input[name='lastName']").type(lastName);
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.get("input[name='passwordConfirmation']").type(password);

  cy.get("input[name='checkAll']").click();
  cy.get("button[type='submit'").click({ force: true });

  cy.get(".Toastify__toast-body > :nth-child(2)").should("exist");
});
