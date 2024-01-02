import { test, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { LoginPage } from "../pages/loginPage";

test.beforeEach(async ({ page }) => {
  const homePage = new BrowserstackHomePage(page);
  const productPage = new ProductsPage(page);
  const loginPage = new LoginPage(page);
  const viewCartPage = new ViewCartPage(page);

  await homePage.goToHomePage();
  await homePage.hoverOverOnUserNavBtn();
  await homePage.clickOnLoginBtn();

  await loginPage.fillEmailInput("test1@gmail.com");
  await loginPage.fillPasswordInput("Test1@gmail");
  await loginPage.clickOnLoginBtn();

  await homePage.clickOnProductsBtn();

  await productPage.addRandomProductToCart();
  await productPage.addRandomProductToCart();

  await homePage.clickOnCartBtn();
  await homePage.clickOnViewCartBtn();

  await viewCartPage.clickOnCheckoutBtn();
});

test.describe("Purchase products with valid data", () => {
  test("place an order as private person", async ({ page }) => {});

  test("place an order as company", async ({ page }) => {});

  test("provide other invoice details", async ({ page }) => {});

  test("add comment to order", async ({ page }) => {});

  test("edit data in order summary", async ({ page }) => {});
});

test.describe("Purchase products with invalid data", () => {
  test("place an order as private person", async ({ page }) => {});

  test("place an order as company", async ({ page }) => {});

  test("place an order with empty data", async ({ page }) => {});

  test("provide other invoice details", async ({ page }) => {});

  test("edit data in order summary", async ({ page }) => {});

  test("add comment to order", async ({ page }) => {});
});
