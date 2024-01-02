import { test, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { productsPage } from "../pages/productsPage";
import Utils from "../utility/Utils";

test.beforeEach(async ({ page }) => {
  const homePage = new BrowserstackHomePage(page);
  const productPage = new productsPage(page);

  await homePage.goToHomePage();
  await homePage.clickOnProductsBtn();
  await productPage.addRandomProductToCart();
  await productPage.addRandomProductToCart();
  await homePage.clickOnCartBtn();
  await homePage.clickOnViewCartBtn();
});

test("should open e-commerce website", async ({ page }) => {
  console.log("test");
});
