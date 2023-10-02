/// <reference types="Cypress" />
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import OrderPage from "../../pages/OrderPage";
import OrderSummaryPage from "../../pages/OrderSummaryPage";
import StripePage from "../../pages/StripePage";
import SuccessPage from "../../pages/SuccessPage";
import ViewCartPage from "../../pages/ViewCartPage";

describe("Checkout products with valid data", () => {
  beforeEach(() => {
    performBasicSteps();
  });

  it("test one", () => {});
});

function performBasicSteps() {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const loginPage = new LoginPage();
  const viewCartPage = new ViewCartPage();

  homePage.visitHomePage();
  homePage.openLoginPage();
  loginPage.loginUser("test1@gmail.com", "Test1@gmail");
  homePage.openProductsPage();

  productsPage.addProductsCart(6);
  homePage.openCartBar();
  homePage.openViewCartPage();

  viewCartPage.openCheckoutPage();
}
