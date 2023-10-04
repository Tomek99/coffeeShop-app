/// <reference types="Cypress" />

import OrderPage from "../../pages/OrderPage";
import OrderSummaryPage from "../../pages/OrderSummaryPage";
import StripePage from "../../pages/StripePage";
import SuccessPage from "../../pages/SuccessPage";
import BaseTest from "./BaseTest";
import CypressHelper from "../../utils/CypressHelper";
import { AddressData } from "../../interfaces/addressDeliveryInterface";
import { CompanyData } from "../../interfaces/companyDataInterface";
import { InvoiceData } from "../../interfaces/invoiceDataInterface";
import { StripeData } from "../../interfaces/stripeDataInterface";
import "cypress-iframe";

const deliverAddresData: AddressData = {
  name: "Test",
  street: "Test 14A",
  house: "13",
  zipCode: "00-000",
  city: "Warsaw",
  number: "111222333",
  email: "test@gmail.com",
};

const companyAddressData: CompanyData = {
  nip: "00000000",
  name: "TestCompany",
  street: "test",
  zipCode: "00-000",
  city: "Warsaw",
};

const invoiceData: InvoiceData = {
  name: "Test test",
  street: "Test 14A",
  zipCode: "00-000",
  city: "Warsaw",
};

const stipeFormData: StripeData = {
  cardNumber: "4242424242424242",
  cardExipry: "4242",
  cardCvc: "424",
  billingName: "Marcin Kowalski",
};

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
      .fillStripeForm(stipeFormData)
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
      .fillStripeForm(stipeFormData)
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
      .fillInvoiceDetailsForm(invoiceData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryBtn()
      .onClickPurchaseBtn()
      .fillStripeForm(stipeFormData)
      .onClickSubmitBtn()
      .haveDisplayedText();

    //Aseration
    assertTextElement.should("have.text", "Payment Successful!");
  });
});
