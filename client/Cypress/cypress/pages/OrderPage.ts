/// <reference types="Cypress" />

import { AddressData } from "../interfaces/addressDeliveryInterface";
import { CompanyData } from "../interfaces/companyDataInterface";
import { InvoiceData } from "../interfaces/invoiceDataInterface";
import OrderSummaryPage from "./OrderSummaryPage";

class OrderPage {
  private elements = {
    //Delivery
    carrierDeliveryLabel: () => cy.get('label[for="carrier"]'),

    pickupDeliveryLabel: () => cy.get('label[for="showroom"]'),

    packagelocerDeliveryLabel: () => cy.get('label[for="packageLocker"]'),

    collectionAtPointDeliveryLabel: () =>
      cy.get('label[for="collectionAtPoint"]'),

    //Client
    purchaseAsPrivatePersonLabel: () => cy.get('label[for="privatePerson"]'),

    purchaseAsCompanyLabel: () => cy.get('label[for="company"]'),

    //Recipient details
    recipientNameInput: () => cy.get("input[name='name']"),

    recipientPhoneInput: () => cy.get("input[name='number']"),

    recipientEmailInput: () => cy.get("input[name='email']"),

    //Delivery address
    addressInput: () => cy.get("input[name='name']"),

    streetAddressInput: () => cy.get("input[name='street']"),

    houseAddressInput: () => cy.get("input[name='house']"),

    zipCodeAddressInput: () => cy.get("input[name='ZIP_code']"),

    cityAddressInput: () => cy.get("input[name='city']"),

    numberAddressInput: () => cy.get("input[name='number']"),

    emailAddressInput: () => cy.get("input[name='email']"),

    //Company details for invoice
    companyNipInput: () => cy.get("input[name='companyNip']"),

    companyNameInput: () => cy.get("input[name='companyName']"),

    companyStreetInput: () => cy.get("input[name='companyStreet']"),

    companyZipCodeInput: () => cy.get("input[name='companyZIPcode']"),

    companyCityInput: () => cy.get("input[name='companyCity']"),

    //Private person invoice details
    invoiceDetailsLabel: () => cy.get('label[for="invoice"]'),

    invoiceName: () => cy.get("input[name='i_name']"),

    invoiceStreet: () => cy.get("input[name='i_street']"),

    invoiceZipCode: () => cy.get("input[name='i_ZIP_code']"),

    invoiceCity: () => cy.get("input[name='i_city']"),

    // Payment
    onlinePayment: () => cy.get('label[for="online_payment"]'),

    onlinePaymentCard: () => cy.get('label[for="online_payment_card"]'),

    blikPayment: () => cy.get('label[for="blik"]'),

    traditionalPayment: () => cy.get('label[for="traditional_payment"]'),

    paymentOnDelviery: () => cy.get('label[for="payment_on_delivery"]'),

    summaryBtn: () => cy.get("button").contains("Summary"),
  };

  getErrors(className) {
    return cy.get(className);
  }

  onClickCarrierDeliveryBtn(): OrderPage {
    this.elements.carrierDeliveryLabel().click();
    return new OrderPage();
  }

  onClickPurchaseAsPrivatePersonBtn(): OrderPage {
    this.elements.purchaseAsPrivatePersonLabel().click();
    return new OrderPage();
  }

  onClickPurchaseAsCompanyBtn(): OrderPage {
    this.elements.purchaseAsCompanyLabel().click();
    return new OrderPage();
  }

  onClickOnlinePaymentBtn(): OrderPage {
    this.elements.onlinePayment().click();
    return new OrderPage();
  }

  onClickSummaryBtn(): OrderSummaryPage {
    this.elements.summaryBtn().click();
    return new OrderSummaryPage();
  }

  onClickSummaryInvalidBtn(): OrderPage {
    this.elements.summaryBtn().click();
    return new OrderPage();
  }

  onClickInvoiceDetailsBtn(): OrderPage {
    this.elements.invoiceDetailsLabel().click();
    return new OrderPage();
  }

  fillDeliveryAddressForm(addressData: AddressData): OrderPage {
    this.elements.addressInput().type(addressData.name);
    this.elements.streetAddressInput().type(addressData.street);
    this.elements.houseAddressInput().type(addressData.house);
    this.elements.zipCodeAddressInput().type(addressData.zipCode);
    this.elements.cityAddressInput().type(addressData.city);
    this.elements.numberAddressInput().type(addressData.number);
    this.elements.emailAddressInput().type(addressData.email);
    return new OrderPage();
  }

  fillCompanyForm(comapnyData: CompanyData): OrderPage {
    this.elements.companyNipInput().type(comapnyData.nip);
    this.elements.companyNameInput().type(comapnyData.name);
    this.elements.companyStreetInput().type(comapnyData.street);
    this.elements.companyZipCodeInput().type(comapnyData.zipCode);
    this.elements.companyCityInput().type(comapnyData.city);
    return new OrderPage();
  }

  fillInvoiceDetailsForm(invoiceData: InvoiceData): OrderPage {
    this.elements.invoiceName().type(invoiceData.name);
    this.elements.invoiceStreet().type(invoiceData.street);
    this.elements.invoiceZipCode().type(invoiceData.zipCode);
    this.elements.invoiceCity().type(invoiceData.city);
    return new OrderPage();
  }
}

export default OrderPage;
