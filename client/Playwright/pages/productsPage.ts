import { Page, Locator } from "@playwright/test";
import Utils from "../utility/Utils";

export class ProductsPage {
  private readonly page: Page;
  private readonly productCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCartBtn = page.locator(
      `.BtnsProduct_BtnsProduct__Gi5nT > button:nth-child(2)`
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

  async addProductToCart(element) {
    await this.productCartBtn.nth(element).click();
  }
}
