import AdminPanelPage from "./AdminPanelPage";
import HomePage from "./HomePage";

class AdminPanelLoginPage {
  private elements = {
    loginInput: () => cy.get('input[name="adminLogin"]'),

    passwordInput: () => cy.get('input[name="adminPassword"]'),

    retunHomeBtn: () => cy.get("button").contains(/Return Home/i),

    loginBtn: () => cy.get("button").contains(/Login/i),
  };

  fillLoginAdmin(login: string): AdminPanelLoginPage {
    this.elements.loginInput().type(login);

    return new AdminPanelLoginPage();
  }

  fillPasswordAdmin(password: string): AdminPanelLoginPage {
    this.elements.passwordInput().type(password);
    return new AdminPanelLoginPage();
  }

  clickOnReturnHomeBtn(): HomePage {
    this.elements.retunHomeBtn().click();
    return new HomePage();
  }

  clickOnLoginBtn(): AdminPanelPage {
    this.elements.loginBtn().click();
    return new AdminPanelPage();
  }

  openLoginAdminPage(): AdminPanelLoginPage {
    cy.visit("http://localhost:3000/admin");

    return new AdminPanelLoginPage();
  }
}

export default AdminPanelLoginPage;
