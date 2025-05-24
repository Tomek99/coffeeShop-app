import { test, expect, Page } from "@playwright/test";
import { ApiTests } from "./ApiTests";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ProductPage } from "../pages/productPage";

const userId: string = "64ad79b0111e32cf0a6846e9";
let reviewId: string;

test.describe("Thumb up and down when user is logged in", () => {
  // test.beforeEach(async ({ page }) => {
  //   reviewId = await ApiTests.addCompletedReviewProduct(page, userId);
  // });

  // test.afterEach(async ({ page }) => {
  //   await ApiTests.deleteReviewProduct(page, reviewId);
  // });

  test("should allow thumb up", async ({ page }) => {});

  test("should allow thumb down", async ({ page }) => {});

  test("should NOT allow thumb up again", async ({ page }) => {});

  test("should NOT allow thumb down again", async ({ page }) => {});
});

test.describe("Thumb up and down when user is NOT logged in", () => {
  test("should NOT allow thumb up", async ({ page }) => {
    const homePage = await new BrowserstackHomePage(page);
    const productsPage = await new ProductsPage(page);
    const productPage = await new ProductPage(page);

    await homePage.goToHomePage();
    await homePage.clickOnProductsBtn();
    await productsPage.clickOnViewProductBtn(7);
    await productPage.clickOnProductReviews();
    await productPage.clickOnThumbUp();

    const locator = await page.locator(
      "//div[contains(text(), 'You cannot vote if you are not logged in.')]"
    );
    await expect(locator).toBeVisible();
  });

  test("should NOT allow thumb down", async ({ page }) => {
    const homePage = await new BrowserstackHomePage(page);
    const productsPage = await new ProductsPage(page);
    const productPage = await new ProductPage(page);

    await homePage.goToHomePage();
    await homePage.clickOnProductsBtn();
    await productsPage.clickOnViewProductBtn(7);
    await productPage.clickOnProductReviews();
    await productPage.clickOnThumbDown();

    const locator = await page.locator(
      "//div[contains(text(), 'You cannot vote if you are not logged in.')]"
    );
    await expect(locator).toBeVisible();
  });
});
