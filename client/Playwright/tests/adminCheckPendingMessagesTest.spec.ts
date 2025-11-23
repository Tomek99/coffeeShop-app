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

  test.beforeEach(async ({ page }) => {
    await BaseTest.addMessage(page, userDataContactPage);
    await BaseTest.loginToAdminPage(page);
    await BaseTest.openAdminMessagesPage(page);
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
