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
    const textElement = new OrderPage()
      .onClickCarrierDeliveryBtn()
      .onClickPurchaseAsPrivatePersonBtn()
      .fillDeliveryAddressForm(deliverAddresData)
      .onClickOnlinePaymentBtn()
      .onClickSummaryBtn()
      .onClickPurchaseBtn()
      .fillStripeForm(stipeFormData)
      .onClickSubmitBtn()
      .haveDisplayedText();

    const textPaymentSuccessful = "Payment Successful!";

    //Assertion
    textElement.should("have.text", textPaymentSuccessful);
  });
});
