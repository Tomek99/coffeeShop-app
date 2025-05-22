import { test, expect, Page } from "@playwright/test";
import { ApiTests } from "./ApiTests";
import { BrowserstackHomePage } from "../pages/homePage";

const userId: string = "64ad79b0111e32cf0a6846e9";
let reviewId: string;

test.describe("Thumb up and down when user is logged in", () => {
  test.beforeEach(async ({ page }) => {
    reviewId = await ApiTests.addCompletedReviewProduct(page, userId);
  });

  test.afterEach(async ({ page }) => {
    await ApiTests.deleteReviewProduct(page, reviewId);
  });

  test("should allow thumb up", async ({ page }) => {
    const homePage = await new BrowserstackHomePage(page);
    await homePage.goToHomePage();
  });

  test("should allow thumb down", async ({ page }) => {});

  test("should NOT allow thumb up again", async ({ page }) => {});

  test("should NOT allow thumb down again", async ({ page }) => {});
});

test.describe("Thumb up and down when user is NOT logged in", () => {
  test("should NOT allow thumb up", async ({ page }) => {});

  test("should NOT allow thumb down", async ({ page }) => {});
});
