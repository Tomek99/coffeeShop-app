import { test, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { LoginPage } from "../pages/loginPage";
import { OrderPage } from "../pages/orderPage";
import { DeliveryAddressInterface } from "../interfaces/DeliveryAddressInterface";
import { BaseTest } from "./BaseTest";
import { CompanyAddressInterface } from "../interfaces/CompanyAddressInterface";
import { InvoiceDetailsInterface } from "../interfaces/InvoiceDetailsInterface";
import { RecipientDetailsInterface } from "../interfaces/RecipientDetailsInterface";
import { OrderSummaryPage } from "../pages/orderSummaryPage";
import { StripePage } from "../pages/stripePage";
import { SuccessPage } from "../pages/successPage";

const deliveryAddressData: DeliveryAddressInterface = {
  name: "Test",
  street: "test",
  house: "123",
  zipCode: "00-000",
  city: "Test",
  number: "111222333",
  email: "test@gamil.com",
};

const companyInvoiceData: CompanyAddressInterface = {
  nip: "111111111",
  name: "Test",
  street: "Test",
  zipCode: "00-000",
  city: "Test",
};

const invoiceDetailsData: InvoiceDetailsInterface = {
  name: "test",
  street: "test 32",
  zipCode: "00-000",
  city: "Test",
};

const recipientDetailsData: RecipientDetailsInterface = {
  name: "test",
  phoneNumber: "111222333",
  email: "test@gmail.com",
};

test.describe("Purchase products with valid data", () => {
  test.beforeEach(async ({ page }) => {
    await BaseTest.performBasicStepsForCheckout(page);
  });

  test("place an order as private person", async ({ page }) => {
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

    await stripePage.fillCardNumber();
    await stripePage.fillCardExpiry();
    await stripePage.fillCardCvc();
    await stripePage.fillBillingName();
    await stripePage.onClickSubmitBtn();

    const locator = await successPage.getSuccessLocator();
    await expect(locator).toHaveText("Payment Successful!");
  });

  test("place an order as company", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnCompany();
    await orderPage.fillCompanyForm(companyInvoiceData);
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    await orderSummaryPage.clickOnPurchaseBtn();
  });
  test("provide other invoice details", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnProvideInvoiceDetails();
    await orderPage.fillInvoiceForm(invoiceDetailsData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    await orderSummaryPage.clickOnPurchaseBtn();
  });
  test("place an order and pick up in the showroom", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();

    await orderSummaryPage.clickOnPurchaseBtn();
  });
  test("add comment to order", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnCommentBtn();
    await orderPage.fillCommentArea("Test test test");
    await orderPage.clickOnSummaryBtn();

    await orderSummaryPage.clickOnPurchaseBtn();
  });
  test("edit data in order summary", async ({ page }) => {
    const orderPage = new OrderPage(page);
    const orderSummaryPage = new OrderSummaryPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressData);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
  });
});
