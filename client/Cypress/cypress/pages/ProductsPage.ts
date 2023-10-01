/// <reference types="Cypress" />

class ProductsPage {
  private elements = {
    openProduct: (number) => cy.get(`#showProductId${number}`),

    addProductCart: (number) => cy.get(`#cartFillId${number}`),

    purchaseBtn: (number) => cy.get(`#wishListId${number}`),
  };
}

export default ProductsPage;
