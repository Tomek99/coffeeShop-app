/// <reference types="Cypress" />

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

    purchaseAsCompany: () => cy.get('label[for="company"]'),

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
    CompanyNipInput: () => cy.get("input[name='companyNip']"),

    companyNameInput: () => cy.get("input[name='companyName']"),

    companyStreetInput: () => cy.get("input[name='companyStreet']"),

    companyZipCodeInput: () => cy.get("input[name='companyZIPcode']"),

    companyCityInput: () => cy.get("input[name='companyCity']"),

    //Private person invoice details
    invoiceDetails: () => cy.get('label[for="invoice"]'),

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
}

export default OrderPage;
