import { Locator, Page } from "@playwright/test";

export class SuccessPage {
  private readonly page: Page;
  private readonly successLocator: Locator;
  private readonly goToProductsPageBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successLocator = page.getByText("Payment Successful!");
    this.goToProductsPageBtn = page.getByRole("button", {
      name: "Go to products page",
    });
  }

  async getSuccessLocator() {
    await this.page.waitForTimeout(30000);
    return await this.successLocator;
  }

  async clickOnGoToProductsPageBtn() {
    await this.page.waitForURL("**/order/success");
    await this.goToProductsPageBtn.click();
  }
}
