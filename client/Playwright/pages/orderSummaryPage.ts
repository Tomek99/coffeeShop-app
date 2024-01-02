import { Locator, Page } from "@playwright/test";

export class OrderSummaryPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
