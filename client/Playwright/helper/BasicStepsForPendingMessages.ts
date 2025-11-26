import { Page } from "@playwright/test";
import { UserDataContactPage } from "../types/userDataContactPageType";
import { AdminLoginPage } from "../pages/adminLoginPage";
import { BrowserstackHomePage } from "../pages/homePage";
import { ContactPage } from "../pages/contactPage";
import { AdminPage } from "../pages/adminPage";

export class BasicStepsForPendingMessages {
  public static async loginToAdminPage(page: Page) {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.goToAdminLoginPage();
    await adminLoginPage.fillAdminLoginInput("admin1");
    await adminLoginPage.fillAdminPasswordInput("Nimda1");
    await adminLoginPage.clickOnLoginToAdminPanelBtn();
  }
  public static async openContactPage(page: Page) {
    const homePage = new BrowserstackHomePage(page);
    await homePage.goToHomePage();
    await homePage.openContactPage();
  }

  public static async fillContactForm(
    page: Page,
    userDataContactPage: UserDataContactPage
  ) {
    const contactPage = new ContactPage(page);

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
