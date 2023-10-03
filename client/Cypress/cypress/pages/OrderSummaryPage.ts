/// <reference types="Cypress" />

class OrderSummaryPage {
  private elements = {
    purchaseBtn: () =>
      cy.get("button[type='submit']").contains("Purchase and pay"),
  };

  onClickPurchaseBtn() {
    this.elements.purchaseBtn().click();
  }
}

export default OrderSummaryPage;
