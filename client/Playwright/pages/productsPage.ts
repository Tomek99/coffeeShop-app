import { Page, Locator } from "@playwright/test";
import Utils from "../utility/Utils";

export class productsPage {
  private readonly page: Page;
  private readonly productCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCartBtn = page.locator(
      `#cartFillId${Utils.generateRandomNumber(12)}`
    );
  }

  async addProductsToWishList(productNumber: number) {
    const locator = this.page.locator(`#wishlistId${productNumber}`);
    await locator.click();
  }

  async clickOnViewProductBtn(productNumber: number) {
    const locator = this.page.locator(`#showProductId${productNumber}`);
    await locator.click();
  }

  async addRandomProductToCart() {
    await this.productCartBtn.click();
  }
}
