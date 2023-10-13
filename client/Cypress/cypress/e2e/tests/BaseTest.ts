/// <reference types="Cypress" />
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import ViewCartPage from "../../pages/ViewCartPage";

class BaseTest {
  public static performBasicStepsForOrder() {
    const numberOfProducts: number = 6;

    new HomePage()
      .visitHomePage()
      .openLoginPage()
      .loginUser("test1@gmail.com", "Test1@gmail")
      .openProductsPage()
      .addProductsCart(numberOfProducts)
      .openCartBar()
      .openViewCartPage()
      .openCheckoutPage();
  }
}

export default BaseTest;
