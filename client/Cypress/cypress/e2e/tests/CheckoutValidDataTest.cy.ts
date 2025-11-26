// <reference types="Cypress" />
import "cypress-iframe";
import OrderPage from "../../pages/OrderPage";
import BaseTest from "./BaseTest";
import deliverAddresData from "../../fixtures/deliveryAddressData";
import invoiceAddressData from "../../fixtures/invoiceAddressData";
import companyAddressData from "../../fixtures/companyAddressData";
import reciepientData from "../../fixtures/recipientDetailsData";

describe("Checkout products with valid data", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForOrder();
  });

  // TEST 1 -------------------------------
  it("should place an order as a private person", () => {
    const assertTextElement = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryBtn()
      .clickOnPurchaseBtn()
      .fillStripeForm()
      .clickOnSubmitBtn()
      .haveDisplayedText();

    //Assertion
    assertTextElement.should("have.text", "Payment Successful!");
  });

  // TEST 2 -------------------------------
  it("should place an order as a company", () => {
    const assertTextElement = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryBtn()
      .clickOnPurchaseBtn()
      .fillStripeForm()
      .clickOnSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });

  // TEST 3 -------------------------------
  it("should place an order as private person with invoice details", () => {
    const assertTextElement = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnInvoiceDetailsBtn()
      .fillInvoiceDetailsForm(invoiceAddressData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryBtn()
      .clickOnPurchaseBtn()
      .fillStripeForm()
      .clickOnSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });

  // TEST 4 -------------------------------
  it("should place an order as private person & invoice details & pickup at coffe-shop showroom", () => {
    const assertTextElement = new OrderPage()
      .clickOnShowroomBtn()
      .clickOnPurchaseAsPrivatePersonBtn()
      .fillRecipientAddressForm(reciepientData)
      .clickOnInvoiceDetailsBtn()
      .fillInvoiceDetailsForm(invoiceAddressData)
      .clickOnOnlinePaymentBtn()
      .clickOnSummaryBtn()
      .clickOnPurchaseBtn()
      .fillStripeForm()
      .clickOnSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });
  // TEST 5 -------------------------------
  it("should place an order as company & pickup at coffe-shop showroom & comment", () => {
    const comment = "test test test test test test test test test";

    const assertTextElement = new OrderPage()
      .clickOnCarrierDeliveryBtn()
      .clickOnPurchaseAsCompanyBtn()
      .fillCompanyForm(companyAddressData)
      .fillDeliveryAddressForm(deliverAddresData)
      .clickOnOnlinePaymentBtn()
      .clickOnCommentBtn()
      .addComment(comment)
      .clickOnSummaryBtn()
      .clickOnPurchaseBtn()
      .fillStripeForm()
      .clickOnSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });
});
