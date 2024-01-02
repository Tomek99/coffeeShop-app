import { Locator, Page } from "@playwright/test";

export class ReviewsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
