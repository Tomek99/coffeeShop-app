/// <reference types="Cypress" />

import OrderPage from "../../pages/OrderPage";

import BaseTest from "./BaseTest";
import deliverAddresData from "../../fixtures/deliveryAddressData";
import invoiceAddressData from "../../fixtures/invoiceAddressData";
import companyAddressData from "../../fixtures/companyAddressData";
import reciepientData from "../../fixtures/recipientDetailsData";

import "cypress-iframe";

describe("Checkout products with valid data", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForOrder();
  });

  // TEST 1 -------------------------------
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

  // TEST 2 -------------------------------
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

  // TEST 3 -------------------------------
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

  // TEST 4 -------------------------------
  it("as private person & invoice details & pickup at coffe-shop showroom", () => {
    const assertTextElement = new OrderPage()
      .onClickShowroomBtn()
      .onClickPurchaseAsPrivatePersonBtn()
      .fillRecipientAddressForm(reciepientData)
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
  // TEST 5 -------------------------------
  it.only("as company & pickup at coffe-shop showroom & comment", () => {
    const comment = "test test test test test test test test test";

    const assertTextElement = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickCommentBtn()
      .addComment(comment)
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

  // TEST 6 -------------------------------
  it("should not pass empty form", () => {
    const errors = new OrderPage()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    const NUMBER_OF_ERRORS = 10;

    errors.each((item, index, list) => {
      expect(Cypress.$(item).text()).to.eq("Required");

      if (index === list.length - 1) {
        expect(list).to.have.length(NUMBER_OF_ERRORS);
      }
    });
  });

  // TEST 7 -------------------------------
  it("should not pass without delivery checked option", () => {
    const errors = new OrderPage()
      .onClickPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    const NUMBER_OF_ERRORS = 1;

    errors.each((item, index, list) => {
      if (Cypress.$(item).text() !== "") {
        expect(Cypress.$(item).text()).to.eq("Required");
      }

      if (index === list.length - 1) {
        expect(list).to.have.length(NUMBER_OF_ERRORS);
      }
    });
  });

  // TEST 8 -------------------------------
  it("should not pass without payment checked option", () => {
    const error = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    const NUMBER_OF_ERRORS = 1;

    error.each((item, index, list) => {
      if (Cypress.$(item).text() !== "") {
        expect(Cypress.$(item).text()).to.eq("Required");
      }

      if (index === list.length - 1) {
        expect(list).to.have.length(NUMBER_OF_ERRORS);
      }
    });
  });

  // TEST 9 -------------------------------
  it("should not pass without 'purchasing as' checked option", () => {
    const error = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    const NUMBER_OF_ERRORS = 1;

    error.each((item, index, list) => {
      if (Cypress.$(item).text() !== "") {
        expect(Cypress.$(item).text()).to.eq("Required");
      }

      if (index === list.length - 1) {
        expect(list).to.have.length(NUMBER_OF_ERRORS);
      }
    });
  });

  // TEST 10 -------------------------------
  it("should not pass without 'invoice details' form", () => {
    const errors = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickInvoiceDetailsBtn()
      .onClickOnlinePaymentBtn()
      .onClickSummaryInvalidBtn()
      .getErrors(".ErrMessage_errorText__1OrwW");

    //Asseration
    const NUMBER_OF_ERRORS = 4;

    errors.each((item, index, list) => {
      if (Cypress.$(item).text() !== "") {
        expect(Cypress.$(item).text()).to.eq("Required");
      }

      if (index === list.length - 1) {
        expect(list).to.have.length(NUMBER_OF_ERRORS);
      }
    });
  });
});
