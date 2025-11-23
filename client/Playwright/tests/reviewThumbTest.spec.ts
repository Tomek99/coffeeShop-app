import { test, expect, Page } from "@playwright/test";
import { ApiTests } from "./ApiTests";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ProductPage } from "../pages/productPage";
import { LoginPage } from "../pages/loginPage";

const userId: string = "64ad79b0111e32cf0a6846e9";

test.describe("Thumb up and down when user is logged in", () => {
  let page: Page;
  let reviewId: string;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    reviewId = await ApiTests.addCompletedReviewProduct(page, userId);

    const homePage = await new BrowserstackHomePage(page);
    const loginPage = new LoginPage(page);
    const productsPage = await new ProductsPage(page);
    const productPage = await new ProductPage(page);

    await homePage.goToHomePage();
    await homePage.clickOnCookieAcceptBtn();
    await homePage.clickOnUserNavBtn();
    await homePage.clickOnLoginBtn();

    await loginPage.fillEmailInput("test1@gmail.com");
    await loginPage.fillPasswordInput("Test1@gmail");
    await loginPage.clickOnLoginBtn();

    await homePage.clickOnProductsBtn();

    await productsPage.clickOnViewProductBtn(0);
    await productPage.clickOnProductReviews();
  });

  test.afterEach(async () => {
    await ApiTests.deleteReviewProduct(page, reviewId);
  });

  test("should allow thumb up", async () => {
    const productPage = await new ProductPage(page);
    await productPage.clickOnThumbUp();

    const locator = await page.locator(
      "//div[contains(text(), 'Thank you for your vote')]"
    );
    await expect(locator).toBeVisible();
  });

  test("should allow thumb down", async () => {
    const productPage = await new ProductPage(page);
    await productPage.clickOnThumbDown();

    const locator = await page.locator(
      "//div[contains(text(), 'Thank you for your vote')]"
    );
    await expect(locator).toBeVisible();
  });

  test("should NOT allow thumb up again", async () => {
    const productPage = await new ProductPage(page);
    await productPage.clickOnThumbUp();
    await productPage.clickOnThumbUp();

    const locator = await page.locator(
      "//div[contains(text(), 'Thank you for your vote')]"
    );

    const locator_2 = await page.locator(
      "//div[contains(text(), 'You can only vote once for each comment')]"
    );

    await expect(locator).toBeVisible();
    await expect(locator_2).toBeVisible();
  });

  test("should NOT allow thumb down again", async () => {
    const productPage = await new ProductPage(page);

    await productPage.clickOnThumbDown();
    await productPage.clickOnThumbDown();

    const locator = await page.locator(
      "//div[contains(text(), 'Thank you for your vote')]"
    );

    const locator_2 = await page.locator(
      "//div[contains(text(), 'You can only vote once for each comment')]"
    );

    await expect(locator).toBeVisible();
    await expect(locator_2).toBeVisible();
  });
});

test.describe("Thumb up and down when user is NOT logged in", () => {
  let page: Page;
  let reviewId: string;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    reviewId = await ApiTests.addCompletedReviewProduct(page, userId);

    const homePage = await new BrowserstackHomePage(page);
    await homePage.goToHomePage();
    await homePage.clickOnProductsBtn();
  });

  test.afterEach(async () => {
    await ApiTests.deleteReviewProduct(page, reviewId);
  });

  test("should NOT allow thumb up", async () => {
    const productsPage = await new ProductsPage(page);
    const productPage = await new ProductPage(page);

    await productsPage.clickOnViewProductBtn(4);
    await productPage.clickOnProductReviews();
    await productPage.clickOnThumbUp();

    const locator = await page.locator(
      "//div[contains(text(), 'You cannot vote if you are not logged in.')]"
    );
    await expect(locator).toBeVisible();
  });

  test("should NOT allow thumb down", async () => {
    const productsPage = await new ProductsPage(page);
    const productPage = await new ProductPage(page);

    await productsPage.clickOnViewProductBtn(4);
    await productPage.clickOnProductReviews();
    await productPage.clickOnThumbDown();

    const locator = await page.locator(
      "//div[contains(text(), 'You cannot vote if you are not logged in.')]"
    );
    await expect(locator).toBeVisible();
  });
});
