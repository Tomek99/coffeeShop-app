import { Assertion } from "chai";
import HomePage from "../../pages/HomePage";
import BaseTest from "./BaseTest";

it("Should delete account from system", () => {
  const emailTest: string = "test102@gmail.com";

  const headerLogin = new HomePage()
    .visitHomePage()
    .openSignupPage()
    .fillRegisterForm(emailTest)
    .openProfileSettingsPage()
    .deleteAccount()
    .getHeader();

  headerLogin.should("have.text", "Log in");
});
