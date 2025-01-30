import { test, expect, Page } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { LoginPage } from "../pages/loginPage";
import { OrderPage } from "../pages/orderPage";
import { BaseTest } from "./BaseTest";
import { OrderSummaryPage } from "../pages/orderSummaryPage";
import { StripePage } from "../pages/stripePage";
import { SuccessPage } from "../pages/successPage";
import { deliveryAddressData } from "../data/deliveryAddressData";
import { companyInvoiceData } from "../data/companyInvoiceData";
import { invoiceDetailsData } from "../data/invoiceDetailsData";
import { recipientDetailsData } from "../data/recipientDetailsData";

const onlinePayment: string = "Online payment";
const traditionalPayment: string = "Traditional payment";
const paymentSucess: string = "Payment Successful!";
const comment: string = "Test test test";

test.describe("Purchase products with valid data", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 20000);
    await BaseTest.performBasicStepsForCheckout(page);
  });

  test("should place an order as private person", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });

  test("should place an order as company", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnCompany();
    await orderPage.fillCompanyForm(companyInvoiceData);
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });

  test("should provide other invoice details", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnProvideInvoiceDetails();
    await orderPage.fillInvoiceForm(invoiceDetailsData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });

  test("should place an order and pick up in the showroom", async ({
    page,
  }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnPickupShowroom();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillRecipientDetailsForm(recipientDetailsData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });

  test("should add comment to order", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnCommentBtn();
    await orderPage.fillCommentArea(comment);
    await orderPage.clickOnSummaryBtn();

    const commentLocator = await orderSummaryPage.getTextContent(comment);
    await expect(commentLocator).toHaveText(comment);

    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });

  test("should edit data in order summary", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);
    const stripePage = new StripePage(page);
    const successPage = new SuccessPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnTraditionalPayment();
    await orderPage.clickOnSummaryBtn();

    const locatorTraditionalPayment = await orderSummaryPage.getTextContent(
      traditionalPayment
    );
    await expect(locatorTraditionalPayment).toHaveText(traditionalPayment);

    await orderSummaryPage.clickOnChangeBtn();
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    const locatorOnlinePayment = await orderSummaryPage.getTextContent(
      onlinePayment
    );
    await expect(locatorOnlinePayment).toHaveText(onlinePayment);

    await orderSummaryPage.clickOnPurchaseBtn();
    await stripePage.fillStripeForm();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText(paymentSucess);
  });
});
