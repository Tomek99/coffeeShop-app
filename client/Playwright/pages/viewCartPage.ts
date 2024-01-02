import { Locator, Page } from "@playwright/test";

export class ViewCartPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
