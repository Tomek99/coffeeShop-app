/// <reference types="Cypress" />

class ProductsPage {
  openProduct(number) {
    return cy.get(`#showProductId${number}`);
  }

  addProductCart(number) {
    return cy.get(`#cartFillId${number}`);
  }

  addProductWishlist(number) {
    return cy.get(`#wishListId${number}`);
  }

  //   getNextSubpage() {
  //     return;
  //   }
}

export default ProductsPage;
