import { Page } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";

export class BaseTest {
  public static async performBasicStepsForCheckout(page: Page) {
    const homePage = new BrowserstackHomePage(page);
    const productPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);
    const viewCartPage = new ViewCartPage(page);

    await homePage.goToHomePage();
    await homePage.hoverOverOnUserNavBtn();
    await homePage.clickOnLoginBtn();

    await loginPage.fillEmailInput("test1@gmail.com");
    await loginPage.fillPasswordInput("Test1@gmail");
    await loginPage.clickOnLoginBtn();

    await homePage.clickOnProductsBtn();

    await productPage.addRandomProductToCart();
    await productPage.addRandomProductToCart();

    await homePage.clickOnCartBtn();
    await homePage.clickOnViewCartBtn();

    await viewCartPage.clickOnCheckoutBtn();
  }
}
