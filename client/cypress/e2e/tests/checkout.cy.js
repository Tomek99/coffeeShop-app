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
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const logInPage = new LogInPage();
    const cartPage = new CartPage();

    homePage.visit();
    homePage.getUserNavigationBar().click();
    homePage.getLogInPage().click({ force: true });

    logInPage.getEmailInput().type("testg@gmail.com");
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
  });

  it("as a private person", () => {
    const orderPage = new OrderPage();
    const orderSummaryPage = new OrderSummaryPage();
    const stripePage = new StripePage();
    const successPage = new SuccessPage();
    //Fill form
    orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsPrivatePerson().click();
    orderPage.getNameInputAddress().type("Test");
    orderPage.getStreetInputAddress().type("test 14A");
    orderPage.getHouseInputAddress().type("13");
    orderPage.getZipCodeInputAddress().type("00-000");
    orderPage.getCityInputAddress().type("Warsaw");
    orderPage.getNumberInputAddress().type("111222333");
    orderPage.getEmailInputAddress().type("test@gmail.com");
    //Payment
    orderPage.getOnlinePayment().click();
    //Navigate to order summary page
    orderPage.getSummaryBtn().click();
    //Navigate to stripe page
    orderSummaryPage.getPurchaseBtn().click({ force: true });
    // Fill stripe form
    stripePage.fillStripeForm();
    // Navigate to success page
    stripePage.getStripeSubmitBtn().click();

    //Aseration
    successPage
      .getSuccessText()
      .should("be.visible")
      .and("have.text", "Payment Successful!");
  });

  it("as a company", () => {
    const orderPage = new OrderPage();
    const orderSummaryPage = new OrderSummaryPage();
    const stripePage = new StripePage();
    const successPage = new SuccessPage();

    orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsCompany().click();

    //Fill form
    orderPage.getCompanyNipInput().type("00000000");
    orderPage.getCompanyNameInput().type("TestCompany");
    orderPage.getCompanyStreetInput().type("test");
    orderPage.getCompanyZipCodeInput().type("00-000");
    orderPage.getCompanyCityInput().type("Warsaw");

    orderPage.getNameInputAddress().type("Test");
    orderPage.getStreetInputAddress().type("test 14A");
    orderPage.getHouseInputAddress().type("13");
    orderPage.getZipCodeInputAddress().type("00-000");
    orderPage.getCityInputAddress().type("Warsaw");
    orderPage.getNumberInputAddress().type("111222333");
    orderPage.getEmailInputAddress().type("test@gmail.com");

    //Paymentr
    orderPage.getOnlinePayment().click();
    //Navigate to order summary page
    orderPage.getSummaryBtn().click();
    //Navigate to stripe page
    orderSummaryPage.getPurchaseBtn().click({ force: true });
    // Fill stripe form
    stripePage.fillStripeForm();
    // Navigate to success page
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
  });

  it.only("should not purchase products with empty form", () => {
    const orderPage = new OrderPage();

    //Try to navigate to order summary page
    orderPage.getSummaryBtn().click();

    orderPage
      .getErrors(".ErrMessage_errorText__1OrwW")
      .each((item, index, list) => {
        expect(Cypress.$(item).text()).to.eq("Required");

        if (index === list.length - 1) {
          expect(list).to.have.length(10);
        }
      });
  });

  it.only("should not purchase products without delivery checked option", () => {
    const orderPage = new OrderPage();

    // orderPage.getCarrierDelivery().click();
    orderPage.getPurchaseAsCompany().click();
    //Fill form
    orderPage.getCompanyNipInput().type("00000000");
    orderPage.getCompanyNameInput().type("TestCompany");
    orderPage.getCompanyStreetInput().type("test");
    orderPage.getCompanyZipCodeInput().type("00-000");
    orderPage.getCompanyCityInput().type("Warsaw");
    orderPage.getNameInputAddress().type("Test");
    orderPage.getStreetInputAddress().type("test 14A");
    orderPage.getHouseInputAddress().type("13");
    orderPage.getZipCodeInputAddress().type("00-000");
    orderPage.getCityInputAddress().type("Warsaw");
    orderPage.getNumberInputAddress().type("111222333");
    orderPage.getEmailInputAddress().type("test@gmail.com");

    //Paymentr
    orderPage.getOnlinePayment().click();
    //Navigate to order summary page
    orderPage.getSummaryBtn().click();

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
