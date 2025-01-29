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
    const CARD_NUMBER: string = "4242424242424242";
    const CARD_EXPIRY: string = "2727";
    const CARD_CVC: string = "424";
    const BILLING_NAME: string = "test test";

    await this.cardNumberInput.fill(CARD_NUMBER);
    await this.cardExpiryInput.fill(CARD_EXPIRY);
    await this.cardCvcInput.fill(CARD_CVC);
    await this.billingName.fill(BILLING_NAME);
    await this.submitBtn.click();
  }
}
