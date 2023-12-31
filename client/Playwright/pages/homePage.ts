import { expect, Locator, Page } from "@playwright/test";

export class BrowserstackHomePage {
  private readonly url = "http://localhost:3000/";
  private readonly page: Page;
  private readonly productsPageBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsPageBtn = page.getByRole("link", { name: "Products" }).first();
  }

  async goTo() {
    await this.page.goto(this.url);
  }

  async clickOnProductsBtn() {
    await this.productsPageBtn.click();
  }
}
