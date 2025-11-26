import AdminPanelLoginPage from "../../../pages/AdminPanelLoginPage";

const LOGIN = "admin1";
const PASSWORD = "Nimda1";
const adminPanelPage = new AdminPanelLoginPage();

describe("Adding products with VALID data", () => {
  beforeEach(() => {
    adminPanelPage
      .openLoginAdminPage()
      .fillLoginAdmin(LOGIN)
      .fillPasswordAdmin(PASSWORD)
      .clickOnLoginBtn();
  });

  it("", () => {});
});

describe("Adding products with INVALID data", () => {
  beforeEach(() => {
    adminPanelPage
      .openLoginAdminPage()
      .fillLoginAdmin(LOGIN)
      .fillPasswordAdmin(PASSWORD)
      .clickOnLoginBtn();
  });

  it("", () => {});
});
