it("should create new account", () => {
  cy.visit("http://localhost:3000/sign-up");

  const name = "Tomasz";
  const lastName = "Kowalski";
  const email = "test12312@GoMail.com";
  const password = "Test122@k";

  cy.get(":nth-child(1) > .FieldComponent_inputText__GNSZj")
    .type(name)
    .wait(500);
  cy.get(":nth-child(2) > .FieldComponent_inputText__GNSZj")
    .type(lastName)
    .wait(500);
  cy.get(":nth-child(3) > .FieldComponent_inputText__GNSZj")
    .type(email)
    .wait(500);
  cy.get(":nth-child(4) > .FieldComponent_inputText__GNSZj")
    .type(password)
    .wait(500);
  cy.get(":nth-child(5) > .FieldComponent_inputText__GNSZj")
    .type(password)
    .wait(500);
  cy.get(":nth-child(2) > .CheckBoxGroup_inputCheckbox__rw-L1").click();
  cy.get(".SignUpForm_btnSignUp__w9PrY").click({ force: true });

  const isHomePage = "http://localhost:3000/";
  cy.url().should("eq", isHomePage);
});
