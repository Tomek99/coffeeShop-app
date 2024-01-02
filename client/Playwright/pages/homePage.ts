import { expect, Locator, Page } from "@playwright/test";

export class BrowserstackHomePage {
  private readonly url = "http://localhost:3000/";
  private readonly page: Page;
  private readonly productsPageBtn: Locator;
  private readonly cartBtn: Locator;
  private readonly viewCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsPageBtn = page.getByRole("link", { name: "Products" }).first();
    this.cartBtn = page.locator("#cartBtnOpen132");
    this.viewCartBtn = page.getByRole("link", { name: "View my cart" });
  }

  async goToHomePage() {
    await this.page.goto(this.url);
  }

  async clickOnProductsBtn() {
    await this.productsPageBtn.click();
  }

  async clickOnCartBtn() {
    await this.cartBtn.click();
  }

  async clickOnViewCartBtn() {
    await this.viewCartBtn.click();
  }
}
