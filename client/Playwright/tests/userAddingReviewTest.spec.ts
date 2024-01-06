import { test, expect, Page } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ReviewsPage } from "../pages/reviewsPage";
import { LoginPage } from "../pages/loginPage";
import Utils from "../utility/Utils";
import { BaseTest } from "./BaseTest";
import { userReviewsData } from "../data/userReviewData";

test.beforeEach(async ({ page }) => {
  BaseTest.performBasicStepsForUserAddingReview(page);
});

test.describe("fill out the review form with valid data", () => {
  for (const userReview of userReviewsData) {
    test(`select '${userReview.rate}' stars & add comment '${userReview.message}'`, async ({
      page,
    }) => {
      const reviewsPage = await BaseTest.navigateToFeedbackPage(page);
      await reviewsPage.fillTextArea(userReview.message);
      await reviewsPage.giveRating(userReview.rate);
      await reviewsPage.clickOnSaveBtn();

      const locator = await reviewsPage.getUserMessage(userReview.message);
      await expect(locator).toHaveText(userReview.message);
    });
  }

  test("fill out the review and close review form", async ({ page }) => {
    const reviewsPage = await BaseTest.navigateToFeedbackPage(page);
    await reviewsPage.fillTextArea(userReviewsData[0].message);
    await reviewsPage.giveRating(userReviewsData[0].rate);
    await reviewsPage.clickOnCloseReviewFormBtn();

    await expect(page.locator("#BlurScreen_BlurScreen__pjnTv")).toHaveCount(0);
    await expect(page.locator("//img[contains(@alt, 'product')]")).toHaveCount(
      0
    );
  });
});

//Testing with invalid data
async function checkAsseration(reviewsPage: ReviewsPage, errorsCount: number) {
  const errors = await reviewsPage.getErrors();
  await expect(errors).toHaveCount(errorsCount);
  await expect(errors.nth(0)).toHaveText("Required");
}

test.describe("add user review with invalid data", () => {
  test("display error message below rating when saving with lack rating", async ({
    page,
  }) => {
    const reviewsPage = await BaseTest.navigateToFeedbackPage(page);
    await reviewsPage.fillTextArea("test");
    await reviewsPage.clickOnSaveBtn();
    await checkAsseration(reviewsPage, 1);
  });

  test("display error message below comment when saving with lack comment", async ({
    page,
  }) => {
    const reviewsPage = await BaseTest.navigateToFeedbackPage(page);
    await reviewsPage.giveRating(4);
    await reviewsPage.clickOnSaveBtn();
    await checkAsseration(reviewsPage, 1);
  });

  test("display error message below comment & rating when form is empty", async ({
    page,
  }) => {
    const reviewsPage = await BaseTest.navigateToFeedbackPage(page);
    await reviewsPage.clickOnSaveBtn();
    await checkAsseration(reviewsPage, 2);
  });
});
