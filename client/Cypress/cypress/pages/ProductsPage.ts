/// <reference types="Cypress" />

import CypressHelper from "../utils/CypressHelper";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

class ProductsPage {
  private elements = {
    productViewBtn: (number) => cy.get(`#showProductId${number}`),

    productCartBtn: (number) => cy.get(`#cartFillId${number}`),

    wishBtn: (number) => cy.get(`#wishListId${number}`),
  };

  addProductsCart(numberProducts: number): HomePage {
    const amountProducts = Math.floor(Math.random() * numberProducts + 1);
    for (let i = 0; i < amountProducts; i++) {
      const number = CypressHelper.generateRandomNumber(11); //Math.floor(Math.random() * 11); << zastąpić tym w przypadku blędu
      this.elements.productCartBtn(number).click({ force: true });
    }

    return new HomePage();
  }

  openRevelantProductPage(productNumber: number): ProductPage {
    this.elements.productViewBtn(productNumber).click({ force: true });

    return new ProductPage();
  }
}

export default ProductsPage;
