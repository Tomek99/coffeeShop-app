import { test, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { LoginPage } from "../pages/loginPage";
import { OrderPage } from "../pages/orderPage";
import { DeliveryAddressForm } from "../interfaces/DeliveryAddressInterface";
import { BaseTest } from "./BaseTest";
import { CompanyAddressForm } from "../interfaces/CompanyAddressInterface";

const deliveryAddressForm: DeliveryAddressForm = {
  name: "Test",
  street: "test",
  house: "123",
  zipCode: "00-000",
  city: "Test",
  number: "111222333",
  email: "test@gamil.com",
};

const companyInvoiceForm: CompanyAddressForm = {
  nip: "111111111",
  name: "Test",
  street: "Test",
  zipCode: "00-000",
  city: "Test",
};

test.describe("Purchase products with valid data", () => {
  test.beforeEach(async ({ page }) => {
    BaseTest.performBasicStepsForCheckout(page);
  });

  test("place an order as private person", async ({ page }) => {
    const orderPage = new OrderPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnPrivatePerson();
    await orderPage.fillDeliveryAddressForm(deliveryAddressForm);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
  });

  test("place an order as company", async ({ page }) => {
    const orderPage = new OrderPage(page);

    await orderPage.clickOnCarrier();
    await orderPage.clickOnCompany();
    await orderPage.fillCompanyForm(companyInvoiceForm);
    await orderPage.fillDeliveryAddressForm(deliveryAddressForm);
    await orderPage.clickOnlinePayment();
    await orderPage.clickOnSummaryBtn();
  });

  test("provide other invoice details", async ({ page }) => {});

  test("place an order and pick up in the showroom", async ({ page }) => {});

  test("add comment to order", async ({ page }) => {});

  test("edit data in order summary", async ({ page }) => {});
});
