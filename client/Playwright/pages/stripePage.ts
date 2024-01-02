import { Locator, Page } from "@playwright/test";

export class StripePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
