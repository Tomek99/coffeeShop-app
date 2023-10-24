/// <reference types="Cypress" />

import LoginPage from "./LoginPage";

class ProfileSettingsPage {
  private elements = {
    deleteAccountPopup: () => cy.get("button").contains("Delete account"),

    deleteAccountBtn: () => cy.get("button").contains("Yes, remove"),
  };

  deleteAccount(): LoginPage {
    this.elements.deleteAccountPopup().click();
    this.elements.deleteAccountBtn().click();

    return new LoginPage();
  }
}

export default ProfileSettingsPage;
