import { test, expect, Page } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ReviewsPage } from "../pages/reviewsPage";
import { LoginPage } from "../pages/loginPage";
import Utils from "../utility/Utils";
import { BaseTest } from "./BaseTest";

async function navigateToFeedbackPage(page: Page): Promise<ReviewsPage> {
  const reviewsPage = new ReviewsPage(page);
  await reviewsPage.clickOnReviewsBtn();
  await reviewsPage.clickOnGiveFeedbackBtn();
  return reviewsPage;
}

async function checkAsseration(reviewsPage: ReviewsPage, errorsCount: number) {
  const errors = await reviewsPage.getErrors();
  await expect(errors).toHaveCount(errorsCount);
  await expect(errors.nth(0)).toHaveText("Required");
}

test.beforeEach(async ({ page }) => {
  BaseTest.performBasicStepsForUserAddingReview(page);
});

const randomNumber = Utils.generateRandomNumber(100);
test.describe("add review with valid data", () => {
  test("fill out the review form with correct data ", async ({ page }) => {
    const reviewsPage = await navigateToFeedbackPage(page);
    await reviewsPage.fillTextArea("test" + randomNumber);
    await reviewsPage.clickOnSaveBtn();
  });
});

test.describe("add review with invalid data", () => {
  test("display error message below rating when saving with lack rating", async ({
    page,
  }) => {
    const reviewsPage = await navigateToFeedbackPage(page);
    await reviewsPage.fillTextArea("test" + randomNumber);
    await reviewsPage.clickOnSaveBtn();

    await checkAsseration(reviewsPage, 1);
  });

  test("display error message below comment when saving with lack comment", async ({
    page,
  }) => {
    const reviewsPage = await navigateToFeedbackPage(page);
    await reviewsPage.giveRating(4);
    await reviewsPage.clickOnSaveBtn();
    await checkAsseration(reviewsPage, 1);
  });

  test("display error message below comment & rating when form is empty", async ({
    page,
  }) => {
    const reviewsPage = await navigateToFeedbackPage(page);
    await reviewsPage.clickOnSaveBtn();
    await checkAsseration(reviewsPage, 2);
  });
});
