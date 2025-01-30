// <reference types="Cypress" />

import CypressHelper from "../utils/CypressHelper";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

class ProductsPage {
  private elements = {
    productViewBtn: (number) => cy.get(`#showProductId${number}`),

    productCartBtn: () =>
      cy.get(`.BtnsProduct_BtnsProduct__Gi5nT > button:nth-child(2)`),

    wishBtn: (number) => cy.get(`#wishListId${number}`),

    viewControlerDiv: () => cy.get(`div[data-testid="productControlerView"]`),

    selectViewDiv: (view) => cy.get(`div[data-testid="${view}"]`),

    sortControlerDiv: () => cy.get(`.ProductSort_divBtn__BH0W8`),

    selectSortingOption: (option) => cy.contains(option),

    productsContainer: () => cy.get(`#productsView > div > div`),

    productsAmountRates: () =>
      cy.get(
        "div[class='LatestProduct_divRatingsStars__lqmHL'] > span:nth-child(2)"
      ),
  };

  addProductCart(product_number: number): HomePage {
    this.elements.productCartBtn().eq(product_number).click({ force: true });

    return new HomePage();
  }

  // addProductsCart(amountProducts: number): HomePage {
  //   for (let i = 0; i < amountProducts; i++) {
  //     const number = Math.floor(Math.random() * 5); //Math.floor(Math.random() * 11); << zastąpić tym w przypadku blędu
  //     this.elements.productCartBtn(number).click({ force: true });
  //   }

  //   return new HomePage();
  // }

  openRevelantProductPage(productNumber: number): ProductPage {
    this.elements.productViewBtn(productNumber).click({ force: true });

    return new ProductPage();
  }

  clickOnControlerView(): ProductsPage {
    this.elements.viewControlerDiv().click();
    return this;
  }

  selectView(view): ProductsPage {
    this.elements.selectViewDiv(view).click({ multiple: true });
    return this;
  }

  clickOnSortControler(): ProductsPage {
    this.elements.sortControlerDiv().click({ multiple: true });

    return this;
  }

  clickOnSelectSortingOption(sort: string): ProductsPage {
    this.elements.selectSortingOption(sort).click({ multiple: true });

    return this;
  }

  getProducts() {
    return this.elements.productsContainer();
  }

  getProductsRates() {
    return this.elements.productsAmountRates();
  }
}

export default ProductsPage;
