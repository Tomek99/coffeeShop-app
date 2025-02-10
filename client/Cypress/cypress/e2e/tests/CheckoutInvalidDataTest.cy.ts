// <reference types="Cypress" />
import "cypress-iframe";
import OrderPage from "../../pages/OrderPage";
import BaseTest from "./BaseTest";
import deliverAddresData from "../../fixtures/deliveryAddressData";
import invoiceAddressData from "../../fixtures/invoiceAddressData";
import companyAddressData from "../../fixtures/companyAddressData";
import reciepientData from "../../fixtures/recipientDetailsData";

describe("Checkout products with invalid data", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForOrder();
  });

  // TEST 1 -------------------------------
  it("should not pass empty form", () => {
    const errors = new OrderPage()
      .clickOnSummaryInvalidBtn()
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

  // TEST 2 -------------------------------
  it("should not pass without delivery checked option", () => {
    const errors = new OrderPage()
      .clickOnPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryInvalidBtn()
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

  // TEST 3 -------------------------------
  it("should not pass without payment checked option", () => {
    const error = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnSummaryInvalidBtn()
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

  // TEST 4 -------------------------------
  it("should not pass without 'purchasing as' checked option", () => {
    const error = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryInvalidBtn()
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

  // TEST 5 -------------------------------
  it("should not pass without 'invoice details' form", () => {
    const errors = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnInvoiceDetailsBtn()
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryInvalidBtn()
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
