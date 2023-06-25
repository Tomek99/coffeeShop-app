/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import LogInPage from "../pages/LogInPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import OrderSummaryPage from "../pages/OrderSummaryPage";
import StripePage from "../pages/StripePage";
import SuccessPage from "../pages/SuccessPage";

describe("Checkout products with valid data", () => {
  beforeEach(() => {
    performBasicSteps();
  });

  // TEST 1
  it("as a private person", () => {
    const orderPage = new OrderPage();
    const orderSummaryPage = new OrderSummaryPage();
    const stripePage = new StripePage();
    const successPage = new SuccessPage();
    //Fill form
    orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsPrivatePerson().click();

    fillDeliveryAddressForm(
      orderPage,
      "Test",
      "Test 14A",
      "13",
      "00-000",
      "Warsaw",
      "111222333",
      "test@gmail.com"
    );

    //Payment | Navigate to order summary page | Navigate to stripe page | Fill stripe form | Navigate to success page
    orderPage.getOnlinePayment().click();
    orderPage.getSummaryBtn().click();
    orderSummaryPage.getPurchaseBtn().click({ force: true });
    stripePage.fillStripeForm();
    stripePage.getStripeSubmitBtn().click();

    //Aseration
    successPage
      .getSuccessText()
      .should("be.visible")
      .and("have.text", "Payment Successful!");
  });

  // TEST 2
  it("as a company", () => {
    const orderPage = new OrderPage();
    const orderSummaryPage = new OrderSummaryPage();
    const stripePage = new StripePage();
    const successPage = new SuccessPage();

    orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsCompany().click();

    //Fill company and deliver address forms
    fillCompanyForm(
      orderPage,
      "00000000",
      "TestCompany",
      "test",
      "00-000",
      "Warsaw"
    );
    fillDeliveryAddressForm(
      orderPage,
      "Test",
      "Test 14A",
      "13",
      "00-000",
      "Warsaw",
      "111222333",
      "test@gmail.com"
    );

    //Payment | Navigate to order summary page | Navigate to stripe page | Fill stripe form | Navigate to success page
    orderPage.getOnlinePayment().click();
    orderPage.getSummaryBtn().click();
    orderSummaryPage.getPurchaseBtn().click({ force: true });
    stripePage.fillStripeForm();
    stripePage.getStripeSubmitBtn().click();

    //Aseration
    successPage
      .getSuccessText()
      .should("be.visible")
      .and("have.text", "Payment Successful!");
  });

  // TEST 3
  it("as private person and invoice details", () => {
    const orderPage = new OrderPage();
    const orderSummaryPage = new OrderSummaryPage();
    const stripePage = new StripePage();
    const successPage = new SuccessPage();

    //Fill deliver address and invoice details forms
    orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsPrivatePerson().click();

    fillDeliveryAddressForm(
      orderPage,
      "Test",
      "Test 14A",
      "13",
      "00-000",
      "Warsaw",
      "111222333",
      "test@gmail.com"
    );

    orderPage.getInvoiceDetails().click();

    fillInvoiceDetailsForm(
      orderPage,
      "Test test",
      "Test 14A",
      "00-000",
      "Warsaw"
    );

    //Payment | Navigate to order summary page | Navigate to stripe page | Fill stripe form | Navigate to success page
    orderPage.getOnlinePayment().click();
    orderPage.getSummaryBtn().click();
    orderSummaryPage.getPurchaseBtn().click({ force: true });
    stripePage.fillStripeForm();
    stripePage.getStripeSubmitBtn().click();

    //Aseration
    successPage
      .getSuccessText()
      .should("be.visible")
      .and("have.text", "Payment Successful!");
  });
});

describe("Checkout products with invalid data", () => {
  beforeEach(() => {
    performBasicSteps();
  });

  // TEST 4
  it("should not purchase products with empty form", () => {
    const orderPage = new OrderPage();

    //Try to navigate to order summary page
    orderPage.getSummaryBtn().click();

    //Asseration
    orderPage
      .getErrors(".ErrMessage_errorText__1OrwW")
      .each((item, index, list) => {
        expect(Cypress.$(item).text()).to.eq("Required");

        if (index === list.length - 1) {
          expect(list).to.have.length(10);
        }
      });
  });

  // TEST 5
  it("should not purchase products without delivery checked option", () => {
    const orderPage = new OrderPage();

    //orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsCompany().click();

    //Fill company form and deliver address form
    fillCompanyForm(
      orderPage,
      "00000000",
      "TestCompany",
      "test",
      "00-000",
      "Warsaw"
    );
    fillDeliveryAddressForm(
      orderPage,
      "Test",
      "Test 14A",
      "13",
      "00-000",
      "Warsaw",
      "111222333",
      "test@gmail.com"
    );

    //Payment and  Navigate to order summary page
    orderPage.getOnlinePayment().click();
    orderPage.getSummaryBtn().click();

    //Asseration
    orderPage
      .getErrors(".ErrMessage_errorText__1OrwW")
      .each((item, index, list) => {
        if (Cypress.$(item).text() !== "") {
          expect(Cypress.$(item).text()).to.eq("Required");
        }

        if (index === list.length - 1) {
          expect(list).to.have.length(1);
        }
      });
  });
});

function fillDeliveryAddressForm(
  orderPage,
  name,
  street,
  house,
  zipCode,
  city,
  number,
  email
) {
  orderPage.getNameInputAddress().type(name);
  orderPage.getStreetInputAddress().type(street);
  orderPage.getHouseInputAddress().type(house);
  orderPage.getZipCodeInputAddress().type(zipCode);
  orderPage.getCityInputAddress().type(city);
  orderPage.getNumberInputAddress().type(number);
  orderPage.getEmailInputAddress().type(email);
}

function fillCompanyForm(orderPage, nip, name, street, zipCode, city) {
  orderPage, orderPage.getCompanyNipInput().type(nip);
  orderPage.getCompanyNameInput().type(name);
  orderPage.getCompanyStreetInput().type(street);
  orderPage.getCompanyZipCodeInput().type(zipCode);
  orderPage.getCompanyCityInput().type(city);
}

function fillInvoiceDetailsForm(orderPage, name, street, zipCode, city) {
  orderPage.getInvoiceName().type(name);
  orderPage.getInvoiceStreet().type(street);
  orderPage.getInvoiceZipCode().type(zipCode);
  orderPage.getInvoiceCity().type(city);
}

function performBasicSteps() {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const logInPage = new LogInPage();
  const cartPage = new CartPage();

  homePage.visit();
  homePage.getUserNavigationBar().click();
  homePage.getLogInPage().click({ force: true });

  logInPage.getEmailInput().type("test@gmail.com");
  logInPage.getPasswordInput().type("Test@123@gmail");
  logInPage.getLogInBtn().click();

  homePage.getProductsPage().click({ force: true });
  const amountProducts = Math.floor(Math.random() * 6 + 1);
  for (let i = 0; i < amountProducts; i++) {
    const number = Math.floor(Math.random() * 11);
    productsPage.addProductCart(number).click({ force: true });
  }

  homePage.getCartBar().click();
  homePage.getViewCartPage().click();
  cartPage.getCheckoutBtn().click({ force: true });
}
