import { Locator, Page } from "@playwright/test";

export class ViewCartPage {
  private readonly page: Page;
  private readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.getByRole("link", { name: "Checkout" });
  }

  async clickOnCheckoutBtn() {
    await this.checkoutBtn.click();
  }
}
