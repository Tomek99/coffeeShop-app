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

  test("should display an error if the delivery and payment form is omitted", async ({
    page,
  }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(10);
    await expect(errors.nth(0)).toContainText("Required");
    await expect(errors.nth(1)).toContainText("Required");
  });

  test("should display an error if the delivery form is not ticked", async ({
    page,
  }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(1);
    await expect(errors).toContainText("Required");
  });

  test("should display an error if the purchasing as  form is not selected", async ({
    page,
  }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnCarrier();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(1);
    await expect(errors).toContainText("Required");
  });

  test("should display an error if delivery address is not filled", async ({
    page,
  }) => {
    const orderPage = new OrderPage(page);
    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const errors = await orderPage.getErrors();
    await expect(errors).toHaveCount(7);
    await expect(errors.nth(5)).toContainText("Required");
  });

  test("should display an error if payment method is not checked", async ({
    page,
  }) => {
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
