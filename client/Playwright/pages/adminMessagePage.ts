import { Locator, Page } from "@playwright/test";

export class AdminMessagePage {
  private readonly page: Page;
  private readonly pendingMessagesBtn: Locator;
  private readonly completedMessagesBtn: Locator;
  private readonly confirmMessageBtn: Locator;
  private readonly ignoreMessageBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pendingMessagesBtn = page.getByRole("button", {
      name: "AdminMessagePage",
    });
    this.completedMessagesBtn = page.getByRole("button", {
      name: "Completed messages",
    });
    this.confirmMessageBtn = page.getByRole("button", { name: "Confirm" });
    this.ignoreMessageBtn = page.getByRole("button", { name: "Ignore" });
  }

  async clickOnPendingMessagesBtn() {
    await this.pendingMessagesBtn.click();
  }

  async clickOnCompletedMessagesBtn() {
    await this.completedMessagesBtn.click();
  }

  async clickOnConfirmMessageBtn() {
    await this.confirmMessageBtn.click();
  }

  async clickOnIgnoreMessageBtn() {
    await this.ignoreMessageBtn.last().click();
  }
}
