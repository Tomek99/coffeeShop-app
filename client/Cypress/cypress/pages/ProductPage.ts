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
    this.elements.productReviewsBtn().click();
    return this;
  }

  clickOnThumbUp(): ProductPage {
    const reviewNumber: number = 0;

    this.elements.thumbUpBtn(reviewNumber).click();
    return this;
  }

  clickOnThumbDown(): ProductPage {
    const reviewNumber: number = 0;

    this.elements.thumbDownBtn(reviewNumber).click();
    return this;
  }

  getAlertText() {
    return this.elements.alertText();
  }
}

export default ProductPage;
