import { expect, Locator, Page } from "@playwright/test";

export class BrowserstackHomePage {
  private readonly url = "http://localhost:3000/";
  private readonly page: Page;
  private readonly productsPageBtn: Locator;
  private readonly cartBtn: Locator;
  private readonly viewCartBtn: Locator;
  private readonly userNavBtn: Locator;
  private readonly loginBtn: Locator;
  private readonly reviewsBtn: Locator;
  private readonly contactPageBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsPageBtn = page.getByRole("link", { name: "Products" }).first();
    this.cartBtn = page.locator("#cartBtnOpen132");
    this.viewCartBtn = page.getByRole("link", { name: "View my cart" });
    this.userNavBtn = page.locator("#userNavigationBtn0");
    this.loginBtn = page.getByRole("button", { name: "Log in" });
    this.reviewsBtn = page.getByRole("link", { name: "Reviews" }).first();
    this.contactPageBtn = page.getByRole("link", { name: "Contact" }).first();
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

  async hoverOverOnUserNavBtn() {
    await this.userNavBtn.hover();
  }

  async clickOnUserNavBtn() {
    await this.userNavBtn.click();
  }

  async clickOnLoginBtn() {
    await this.loginBtn.click();
  }

  async clickOnReviewsBtn() {
    await this.reviewsBtn.click();
  }

  async openContactPage() {
    await this.contactPageBtn.click();
  }
}
