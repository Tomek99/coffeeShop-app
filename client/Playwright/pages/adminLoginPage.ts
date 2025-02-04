import { Locator, Page } from "@playwright/test";

export class AdminLoginPage {
  private readonly urlAdminLogin = "http://localhost:3000/admin";
  private readonly page: Page;
  private readonly adminLogin: Locator;
  private readonly adminPassword: Locator;
  private readonly adminloginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adminLogin = page.getByPlaceholder("Enter login");
    this.adminPassword = page.getByPlaceholder("Enter password");
    this.adminloginBtn = page.getByRole("button", { name: "Login" });
  }

  async goToAdminLoginPage() {
    await this.page.goto(this.urlAdminLogin);
  }

  async fillAdminLoginInput(login: string) {
    await this.adminLogin.click();
    await this.adminLogin.fill(login);
  }

  async fillAdminPasswordInput(password: string) {
    await this.adminPassword.click();
    await this.adminPassword.fill(password);
  }

  async clickOnLoginToAdminPanelBtn() {
    await this.adminloginBtn.click();
  }
}
