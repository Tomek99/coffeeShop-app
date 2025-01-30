import { Dialog, Locator, Page } from "@playwright/test";

export class ContactPage {
  private readonly page: Page;
  private readonly fullNameInputMessage: Locator;
  private readonly phoneInputMessage: Locator;
  private readonly messageTextAreaMessage: Locator;
  private readonly sendBtnMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInputMessage = page
      .locator("form:nth-child(2)")
      .getByPlaceholder("Name and surname");
    this.phoneInputMessage = page.getByPlaceholder("Phone number");
    this.messageTextAreaMessage = page
      .locator("form:nth-child(2)")
      .getByPlaceholder("Your message");

    this.sendBtnMessage = page
      .locator("form:nth-child(2)")
      .getByRole("button", { name: "send" });
  }

  async fillFullNameInputMessage(value: string) {
    await this.fullNameInputMessage.fill(value);
  }

  async fillPhoneInputMessage(value: string) {
    await this.phoneInputMessage.fill(value);
  }

  async fillMessageTextAreaMessage(value: string) {
    await this.messageTextAreaMessage.fill(value);
  }

  async clickOnSendBtnMessage() {
    await this.sendBtnMessage.click();
  }
}
