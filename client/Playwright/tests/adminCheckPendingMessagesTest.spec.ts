import { test, expect } from "@playwright/test";
import { AdminLoginPage } from "../pages/adminLoginPage";
import { BasicStepsForPendingMessages } from "../helper/BasicStepsForPendingMessages";
import { AdminMessagePage } from "../pages/adminMessagePage";
import { UserDataContactPage } from "../types/userDataContactPageType";

const userDataContactPage: UserDataContactPage = {
  fullName: "Test Test",
  phoneNumber: "111 222 333",
  message: `Hello world!`,
};

test.describe("Checking clients messages in admin panel", () => {
  test.beforeEach(async ({ page }) => {
    await BasicStepsForPendingMessages.openContactPage(page);
    await BasicStepsForPendingMessages.fillContactForm(
      page,
      userDataContactPage
    );
    await BasicStepsForPendingMessages.loginToAdminPage(page);
    await BasicStepsForPendingMessages.openAdminMessagesPage(page);
  });

  test("should confirm message", async ({ page }) => {
    const adminMessagePage = new AdminMessagePage(page);
    const message = await page.getByText(userDataContactPage.message);
    await expect(message).toBeVisible();

    await adminMessagePage.clickOnConfirmMessageBtn();
    await adminMessagePage.clickOnCompletedMessagesBtn();

    const message_2 = await page.getByText(userDataContactPage.message);
    await expect(message_2.first()).toBeVisible();
  });

  test("should ignore message", async ({ page }) => {
    const adminMessagePage = new AdminMessagePage(page);
    const message = await page.getByText(userDataContactPage.message);
    await expect(message).toBeVisible();

    await adminMessagePage.clickOnIgnoreMessageBtn();
    await expect(page.getByText(userDataContactPage.message)).not.toBeVisible();
  });

  test('should display a notification "no news"', async ({ page }) => {
    const adminMessagePage = new AdminMessagePage(page);
    const message = await page.getByText(userDataContactPage.message);
    await expect(message).toBeVisible();

    await adminMessagePage.clickOnIgnoreMessageBtn();
    await expect(page.getByText("No news...")).toBeVisible();
  });
});
