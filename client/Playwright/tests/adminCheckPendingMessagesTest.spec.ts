import { test, expect } from "@playwright/test";
import { AdminLoginPage } from "../pages/adminLoginPage";
import { BaseTest } from "./BaseTest";
import { AdminMessagePage } from "../pages/adminMessagePage";
import { UserDataContactPage } from "../types/userDataContactPageType";

test.describe("Checking clients messages in admin panel", () => {
  const userDataContactPage: UserDataContactPage = {
    fullName: "Test Test",
    phoneNumber: "111 222 333",
    message: `Hello world!`,
  };

  const ZERO = 0;

  test.beforeEach(async ({ page }) => {
    await BaseTest.addMessage(page, userDataContactPage);
    await BaseTest.loginToAdminPage(page);
    await BaseTest.openAdminMessagesPage(page);
  });

  test("should confirm message", async ({ page }) => {
    const adminMessagePage = new AdminMessagePage(page);

    await expect(page.getByText(userDataContactPage.message)).toHaveText(
      userDataContactPage.message
    );

    await adminMessagePage.clickOnCompletedMessagesBtn();

    await expect(page.getByText(userDataContactPage.message).last()).toHaveText(
      userDataContactPage.message
    );
  });

  test("should ignore message", async ({ page }) => {
    const adminMessagePage = new AdminMessagePage(page);

    await expect(page.getByText(userDataContactPage.message)).toHaveText(
      userDataContactPage.message
    );

    await adminMessagePage.clickOnIgnoreMessageBtn();
    await expect(page.getByText(userDataContactPage.message)).not.toBeVisible();
  });
});
