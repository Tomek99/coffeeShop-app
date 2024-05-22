/// <reference types="Cypress" />
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import ViewCartPage from "../../pages/ViewCartPage";
import CypressHelper from "../../utils/CypressHelper";

class BaseTest {
  public static performBasicStepsForOrder(): void {
    const numberOfProducts: number = CypressHelper.generateRandomNumber(6);

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

  public static performBasicStepsForReviewThumb(isUserLoggedIn: boolean): void {
    if (isUserLoggedIn) {
      new HomePage()
        .visitHomePage()
        .openLoginPage()
        .loginUser("test1@gmail.com", "Test1@gmail")
        .openProductsPage();
    } else {
      new HomePage()
        .visitHomePage()
        .openProductsPage()
        .openRevelantProductPage(0);
    }
  }

  public static performBasicStepsForAddressDetails(): void {
    new HomePage()
      .visitHomePage()
      .openLoginPage()
      .loginUser("test1@gmail.com", "Test1@gmail")
      .openAddressDetails();
  }
}

export default BaseTest;
