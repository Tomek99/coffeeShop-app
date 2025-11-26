import { BrowserstackHomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { Page } from "@playwright/test";

// checkoutValidDataTest && checkoutInvalidDataTest
export class BasicStepsForCheckout {
  public static async navigateToLogin(page: Page) {
    const home = new BrowserstackHomePage(page);
    await home.goToHomePage();
    await home.hoverOverOnUserNavBtn();
    await home.clickOnLoginBtn();
  }

  public static async login(page: Page, email: string, password: string) {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmailInput(email);
    await loginPage.fillPasswordInput(password);
    await loginPage.clickOnLoginBtn();
  }

  public static async addProductsToCart(page: Page) {
    const home = new BrowserstackHomePage(page);
    const productPage = new ProductsPage(page);

    await home.clickOnProductsBtn();
    await productPage.addProductToCart(1);
    await productPage.addProductToCart(2);
  }

  public static async goToCheckout(page: Page) {
    const home = new BrowserstackHomePage(page);
    const viewCartPage = new ViewCartPage(page);

    await home.clickOnCartBtn();
    await home.clickOnViewCartBtn();
    await viewCartPage.clickOnCheckoutBtn();
  }
}
