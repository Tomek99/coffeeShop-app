import { test, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { LoginPage } from "../pages/loginPage";
import { OrderPage } from "../pages/orderPage";

import { BaseTest } from "./BaseTest";
import { deliveryAddressData } from "../data/deliveryAddressData";
import { OrderSummaryPage } from "../pages/orderSummaryPage";
import { StripePage } from "../pages/stripePage";
import { SuccessPage } from "../pages/successPage";

test.describe("Purchase products with invalid data", () => {
  test.beforeEach(async ({ page }) => {
    BaseTest.performBasicStepsForCheckout(page);
  });

  test("skip filling delivery and payment form", async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(10);

    await expect(errors.nth(0)).toContainText("Required");
  });

  test("skip ticking delivery form", async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(1);
    await expect(errors).toContainText("Required");
  });

  test("skip ticking 'purchasking as' form", async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnCarrier();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(1);
    await expect(errors).toContainText("Required");
  });

  test("skip filling delivery address form", async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(7);
    await expect(errors.nth(5)).toContainText("Required");
  });

  test("skip ticking payment method form", async ({ page }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnSummaryBtn();

    const error = await orderPage.getErrors();
    await expect(error).toHaveCount(1);
    await expect(error).toContainText("Required");
  });
});
