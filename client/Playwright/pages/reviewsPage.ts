import { Locator, Page } from "@playwright/test";

export class ReviewsPage {
  private readonly page: Page;
  private readonly giveFeedbackBtn: Locator;
  private readonly saveBtn: Locator;
  private readonly textArea: Locator;
  private readonly errorMessage: Locator;
  private readonly reviewsBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.giveFeedbackBtn = page
      .getByRole("button", { name: "Give Feedback" })
      .first();
    this.saveBtn = page.getByRole("button", { name: "Save" });
    this.textArea = page.getByPlaceholder("Your comments");
    this.errorMessage = page.getByText("Required");
    this.reviewsBtn = page.locator("//div/a[text()='Reviews']");
  }

  async clickOnGiveFeedbackBtn() {
    await this.giveFeedbackBtn.click({ force: true });
  }

  async clickOnSaveBtn() {
    await this.saveBtn.click();
  }

  async clickOnReviewsBtn() {
    await this.reviewsBtn.click();
  }

  async fillTextArea(value: string) {
    await this.textArea.fill(value);
  }

  async giveRating(value: number) {
    await this.page
      .locator("form label")
      .filter({ hasText: `${value} Stars` })
      .click();
  }

  async getErrors() {
    return await this.errorMessage;
  }
}
