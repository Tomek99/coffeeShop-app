/// <reference types="Cypress" />

class OrderPage {
  // Delivery
  getCarrierDelivery() {
    return cy.get('label[for="carrier"]');
  }
  getPickupDelivery() {
    return cy.get('label[for="showroom"]');
  }
  getPackagelockerDelivery() {
    return cy.get('label[for="packageLocker"]');
  }
  getCollectionAtPointDelivery() {
    return cy.get('label[for="collectionAtPoint"]');
  }

  // Purchase as privatePerson/Company
  getPurchaseAsPrivatePerson() {
    return cy.get('label[for="privatePerson"]');
  }
  getPurchaseAsCompany() {
    return cy.get('label[for="company"]');
  }

  //Recipient details
  getNameInputRecipient() {
    return cy.get("input[name='name']");
  }
  getPhoneNumberInputRecipient() {
    return cy.get("input[name='number']");
  }
  getEmailInputRecipient() {
    return cy.get("input[name='email']");
  }

  //Delivery address
  getNameInputAddress() {
    return cy.get("input[name='name']");
  }
  getStreetInputAddress() {
    return cy.get("input[name='street']");
  }
  getHouseInputAddress() {
    return cy.get("input[name='house']");
  }
  getZipCodeInputAddress() {
    return cy.get("input[name='ZIP_code']");
  }
  getCityInputAddress() {
    return cy.get("input[name='city']");
  }
  getNumberInputAddress() {
    return cy.get("input[name='number']");
  }
  getEmailInputAddress() {
    return cy.get("input[name='email']");
  }

  //Company details for invoice
  getCompanyNipInput() {
    return cy.get("input[name='companyNip']");
  }
  getCompanyNameInput() {
    return cy.get("input[name='companyName']");
  }
  getCompanyStreetInput() {
    return cy.get("input[name='companyStreet']");
  }
  getCompanyCityInput() {
    return cy.get("input[name='companyCity']");
  }

  //Private person invoice details
  getInvoiceName() {
    return cy.get("input[name='i_name']");
  }
  getInvoiceName() {
    return cy.get("input[name='i_street']");
  }
  getInvoiceName() {
    return cy.get("input[name='i_ZIP_code']");
  }
  getInvoiceName() {
    return cy.get("input[name='i_city']");
  }

  // Payment
  getOnlinePayment() {
    return cy.get('label[for="online_payment"]');
  }
  getOnlinePaymentCard() {
    return cy.get('label[for="online_payment_card"]');
  }
  getBlikPayment() {
    return cy.get('label[for="blik"]');
  }
  getTraditionalPayment() {
    return cy.get('label[for="traditional_payment"]');
  }
  getPaymentOnDelviery() {
    return cy.get('label[for="payment_on_delivery"]');
  }

  getSummaryBtn() {
    return cy.get("button").contains("Summary");
  }
}

export default OrderPage;
