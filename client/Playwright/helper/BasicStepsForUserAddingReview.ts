import { BrowserstackHomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { Page } from "@playwright/test";
import { ReviewsPage } from "../pages/reviewsPage";
export class BasicStepsForUserAddingReview {
  // checkoutValidDataTest && checkoutInvalidDataTest
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

  public static async navigateToUserReviews(page: Page) {
    const homePage = new BrowserstackHomePage(page);
    await homePage.hoverOverOnUserNavBtn();
    await homePage.clickOnReviewsBtn();
  }

  public static async navigateToFeedback(page: Page): Promise<ReviewsPage> {
    const reviewsPage = new ReviewsPage(page);
    await reviewsPage.clickOnReviewsBtn();
    await reviewsPage.clickOnGiveFeedbackBtn();
    return reviewsPage;
  }
}
