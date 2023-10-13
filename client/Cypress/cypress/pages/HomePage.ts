/// <reference types="Cypress" />

import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";
import ProfileSettingsPage from "./ProfileSettingsPage";
import SignupPage from "./SignupPage";
import ViewCartPage from "./ViewCartPage";

class HomePage {
  private elements = {
    productsPageBtn: () => cy.get("a").contains("Products"),

    userBtn: () => cy.get("#userNavigationBtn0"),

    cartBarBtn: () => cy.get("#cartBtnOpen132"),

    vieCartPageBtn: () => cy.get("#ViewCart"),

    signupBtn: () =>
      cy.get(
        "li[class*='PopupUserNav1_btnSignIn_Up__vWDrC']>a[href*='/sign-up']"
      ),

    profileSettingsBtn: () =>
      cy.get("div[class*='PopupUserNav1_list__J7Nmc']>li>a[href*='/settings']"),
  };

  visitHomePage(): HomePage {
    cy.visit("http://localhost:3000/");
    return this;
  }

  openLoginPage(): LoginPage {
    this.elements.userBtn().click();
    return new LoginPage();
  }

  openProductsPage(): ProductsPage {
    this.elements.productsPageBtn().click();
    return new ProductsPage();
  }

  openCartBar(): HomePage {
    this.elements.cartBarBtn().click({ force: true });
    return this;
  }

  openViewCartPage(): ViewCartPage {
    this.elements.vieCartPageBtn().click();
    return new ViewCartPage();
  }

  openSignupPage(): SignupPage {
    this.elements.userBtn().trigger("mouseover");
    this.elements.signupBtn().click({ force: true });

    return new SignupPage();
  }

  openProfileSettingsPage(): ProfileSettingsPage {
    cy.wait(5000);

    this.elements.userBtn().trigger("mouseover", { force: true });
    this.elements.profileSettingsBtn().click({ force: true });

    return new ProfileSettingsPage();
  }
}

export default HomePage;
