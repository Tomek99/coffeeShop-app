import { test, expect } from "@playwright/test";
import { AdminLoginPage } from "../pages/adminLoginPage";
import { BaseTest } from "./BaseTest";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    BaseTest.loginToAdminPage(page);
  });
});
