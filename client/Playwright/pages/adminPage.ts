import { Locator, Page } from "@playwright/test";

export class AdminPage {
  private readonly page: Page;
  private readonly dashboardPage: Locator;
  private readonly customersPage: Locator;
  private readonly reviewsPage: Locator;
  private readonly messagesPage: Locator;
  private readonly productsPage: Locator;
  private readonly transactionsPage: Locator;
  private readonly adminPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardPage = page.getByRole("link", { name: "Dashboard" });
    this.customersPage = page.getByRole("link", { name: "Customers" });
    this.reviewsPage = page.getByRole("link", { name: "Reviews" });
    this.messagesPage = page.getByRole("link", { name: "Messages" });
    this.productsPage = page.getByRole("link", { name: "Products" });
    this.transactionsPage = page.getByRole("link", { name: "Transactions" });
    this.adminPage = page.getByRole("link", { name: "Admin" });
  }

  async openAdminMessagesPage() {
    await this.messagesPage.click();
  }
}
