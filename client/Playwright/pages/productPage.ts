import { Locator, Page } from "@playwright/test";

export class ProductPage {
  private readonly page: Page;
  private readonly productReviewsBtn: Locator;
  private readonly thumbUpBtn: Locator;
  private readonly thumDownBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productReviewsBtn = page.getByRole("button", {
      name: /Product reviews/i,
    });

    this.thumbUpBtn = page
      .locator("//button[@class='BtnThumbs_thumb__DhYHG']")
      .first();
    this.thumDownBtn = page
      .locator("//button[@class='BtnThumbs_thumb__DhYHG']")
      .nth(1);
  }

  async clickOnProductReviews() {
    await this.productReviewsBtn.click();
  }

  async clickOnThumbUp() {
    await this.thumbUpBtn.click();
  }

  async clickOnThumbDown() {
    await this.thumDownBtn.click();
  }
}
