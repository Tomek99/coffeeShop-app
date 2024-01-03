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

  async fillCardNumber() {
    await this.cardNumberInput.fill("4242424242424242");
  }

  async fillCardExpiry() {
    await this.cardExpiryInput.fill("4242");
  }

  async fillCardCvc() {
    await this.cardCvcInput.fill("424");
  }

  async fillBillingName() {
    await this.billingName.fill("test test");
  }

  async onClickSubmitBtn() {
    await this.submitBtn.click();
  }
}
