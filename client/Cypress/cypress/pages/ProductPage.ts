// <reference types="Cypress" />

class ProductPage {
  private elements = {
    productReviewsBtn: () => cy.contains("Product reviews"),

    thumbUpBtn: (reviewNumber: number) =>
      cy.get(`button[data-cy='thumbUpBtn']`).eq(reviewNumber),

    thumbDownBtn: (reviewNumber: number) =>
      cy.get(`button[data-cy='thumbDownBtn']`).eq(reviewNumber),

    alertText: () => cy.get("div[role='alert'] > div:nth-child(2)"),
  };

  openProductReviews(): ProductPage {
    this.elements.productReviewsBtn().click({ force: true });
    return this;
  }

  clickOnThumbUp(reviewNumber: number): ProductPage {
    this.elements.thumbUpBtn(reviewNumber).click();
    return this;
  }

  clickOnThumbDown(reviewNumber: number): ProductPage {
    this.elements.thumbDownBtn(reviewNumber).click();
    return this;
  }

  getAlertText() {
    return this.elements.alertText();
  }
}

export default ProductPage;
