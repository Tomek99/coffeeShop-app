import { Locator, Page } from "@playwright/test";

export class OrderSummaryPage {
  private readonly page: Page;
  private readonly purchaseBtn: Locator;
  private readonly changeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.purchaseBtn = page.getByRole("button", {
      name: "Purchase and pay",
    });
    this.changeBtn = page.getByText("Change").nth(4);
  }

  async clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  async clickOnChangeBtn() {
    this.changeBtn.click();
  }
}
