/// <reference types="Cypress" />
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import ViewCartPage from "../../pages/ViewCartPage";

class BaseTest {
  public static performBasicStepsForOrder() {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const loginPage = new LoginPage();
    const viewCartPage = new ViewCartPage();

    homePage.visitHomePage();
    homePage.openLoginPage();
    loginPage.loginUser("test1@gmail.com", "Test1@gmail");
    homePage.openProductsPage();

    const numberOfProducts: number = 6;

    productsPage.addProductsCart(numberOfProducts);
    homePage.openCartBar();
    homePage.openViewCartPage();

    viewCartPage.openCheckoutPage();
  }
}

export default BaseTest;
