/// <reference types="Cypress" />

import OrderPage from "../../pages/OrderPage";
import OrderSummaryPage from "../../pages/OrderSummaryPage";
import StripePage from "../../pages/StripePage";
import SuccessPage from "../../pages/SuccessPage";
import BaseTest from "./BaseTest";
import CypressHelper from "../../utils/CypressHelper";

import deliverAddresData from "../../fixtures/deliveryAddressData";
import companyAddressData from "../../fixtures/companyAddressData";
import invoiceAddressData from "../../fixtures/invoiceAddressData";
import "cypress-iframe";

describe("Checkout products with valid data", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForOrder();
  });

  // TEST 1
  it("as a private person", () => {
    const assertTextElement = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryBtn()
      .onClickPurchaseBtn()
      .fillStripeForm()
      .onClickSubmitBtn()
      .haveDisplayedText();

    //Assertion
    assertTextElement.should("have.text", "Payment Successful!");
  });

  // TEST 2
  it("as a company", () => {
    const assertTextElement = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryBtn()
      .onClickPurchaseBtn()
      .fillStripeForm()
      .onClickSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });

  // TEST 3
  it("as private person with invoice details", () => {
    const assertTextElement = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickInvoiceDetailsBtn()
      .fillInvoiceDetailsForm(invoiceAddressData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryBtn()
      .onClickPurchaseBtn()
      .fillStripeForm()
      .onClickSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });
});

describe("Checkout products with invalid data", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForOrder();
  });

  // TEST 4
  it("should not purchase products with empty form", () => {
    const errors = new OrderPage()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Aseration
    errors.each((item, index, list) => {
      expect(Cypress.$(item).text()).to.eq("Required");

      if (index === list.length - 1) {
        expect(list).to.have.length(10);
      }
    });
  });

  // TEST 5
  it("should not purchase products without delivery checked option", () => {
    const errors = new OrderPage()
      .onClickPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    errors.each((item, index, list) => {
      if (Cypress.$(item).text() !== "") {
        expect(Cypress.$(item).text()).to.eq("Required");
      }

      if (index === list.length - 1) {
        expect(list).to.have.length(1);
      }
    });
  });
});
