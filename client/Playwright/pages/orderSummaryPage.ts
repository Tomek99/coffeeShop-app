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
    await this.purchaseBtn.click();
  }

  async clickOnChangeBtn() {
    await this.changeBtn.click();
  }

  async getTextContent(value: string) {
    return await this.page.locator(`//p[text()='${value}']`);
  }
}
