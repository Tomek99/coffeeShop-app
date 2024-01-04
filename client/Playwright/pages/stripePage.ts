import { Locator, Page } from "@playwright/test";

export class StripePage {
  private readonly page: Page;
  private readonly cardNumberInput: Locator;
  private readonly cardExpiryInput: Locator;
  private readonly cardCvcInput: Locator;
  private readonly billingName: Locator;
  private readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardNumberInput = page.locator("#cardNumber");
    this.cardExpiryInput = page.locator("#cardExpiry");
    this.cardCvcInput = page.locator("#cardCvc");
    this.billingName = page.locator("#billingName");
    this.submitBtn = page.getByRole("button", { name: "Pay" });
  }

  async fillStripeForm() {
    await this.cardNumberInput.fill("4242424242424242");
    await this.cardExpiryInput.fill("4242");
    await this.cardCvcInput.fill("424");
    await this.billingName.fill("test test");
    await this.submitBtn.click();
  }
}
