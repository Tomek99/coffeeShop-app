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
    homePage.getLogInPage().click();

    logInPage.getEmailInput().type("szybko872@gmail.com");
    logInPage.getPasswordInput().type("Zxcv1234@");
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
});
