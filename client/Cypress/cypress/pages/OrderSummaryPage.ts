/// <reference types="Cypress" />

import CypressHelper from "../utils/CypressHelper";
import StripePage from "./StripePage";

class OrderSummaryPage {
  private elements = {
    purchaseBtn: () =>
      cy.get("button[type='submit']").contains("Purchase and pay"),
  };

  clickOnPurchaseBtn(): StripePage {
    CypressHelper.handleNotFoundElementExpection();
    this.elements.purchaseBtn().click();

    return new StripePage();
  }
}

export default OrderSummaryPage;
