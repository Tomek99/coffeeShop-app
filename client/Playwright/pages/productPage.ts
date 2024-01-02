import { Locator, Page } from "@playwright/test";

export class ProductPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
