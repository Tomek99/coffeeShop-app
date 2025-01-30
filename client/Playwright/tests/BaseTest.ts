import { Page, expect } from "@playwright/test";
import { BrowserstackHomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { ViewCartPage } from "../pages/viewCartPage";
import { deliveryAddressData } from "../data/deliveryAddressData";
import { OrderPage } from "../pages/orderPage";
import { OrderSummaryPage } from "../pages/orderSummaryPage";
import { StripePage } from "../pages/stripePage";
import { SuccessPage } from "../pages/successPage";
import { ContactPage } from "../pages/contactPage";
import { ReviewsPage } from "../pages/reviewsPage";
import { AdminLoginPage } from "../pages/adminLoginPage";
import { AdminPage } from "../pages/adminPage";
import { UserDataContactPage } from "../types/userDataContactPageType";

export class BaseTest {
  // checkoutValidDataTest && checkoutInvalidDataTest
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
    await productPage.addProductToCart(1);
    await productPage.addProductToCart(2);
    await homePage.clickOnCartBtn();
    await homePage.clickOnViewCartBtn();
    await viewCartPage.clickOnCheckoutBtn();
  }

  public static async performBasicStepsForUserAddingReview(page: Page) {
    const homePage = new BrowserstackHomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goToHomePage();
    await homePage.hoverOverOnUserNavBtn();
    await homePage.clickOnLoginBtn();
    await loginPage.fillEmailInput("test1@gmail.com");
    await loginPage.fillPasswordInput("Test1@gmail");
    await loginPage.clickOnLoginBtn();
    await homePage.hoverOverOnUserNavBtn();
    await homePage.clickOnReviewsBtn();
  }

  // public static async placeOrder() {}

  public static async navigateToFeedbackPage(page: Page): Promise<ReviewsPage> {
    const reviewsPage = new ReviewsPage(page);
    await reviewsPage.clickOnReviewsBtn();
    await reviewsPage.clickOnGiveFeedbackBtn();
    return reviewsPage;
  }

  public static async loginToAdminPage(page: Page) {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.goToAdminLoginPage();
    await adminLoginPage.fillAdminLoginInput("admin1");
    await adminLoginPage.fillAdminPasswordInput("Nimda1");
    await adminLoginPage.clickOnLoginToAdminPanelBtn();
  }

  public static async addMessage(
    page: Page,
    userDataContactPage: UserDataContactPage
  ) {
    const homePage = new BrowserstackHomePage(page);
    const contactPage = new ContactPage(page);

    await homePage.goToHomePage();
    await homePage.openContactPage();

    await contactPage.fillFullNameInputMessage(userDataContactPage.fullName);
    await contactPage.fillPhoneInputMessage(userDataContactPage.phoneNumber);
    await contactPage.fillMessageTextAreaMessage(userDataContactPage.message);
    await contactPage.clickOnSendBtnMessage();
  }

  public static async openAdminMessagesPage(page: Page) {
    const adminPage = new AdminPage(page);

    await adminPage.openAdminMessagesPage();
  }
}
