/// <reference types="Cypress" />

class AddressDetails {
  private elements = {
    newAddressBtn: () => cy.get("button").contains("Add new address"),

    newInvoiceBtn: () => cy.get("button").contains("Add new invoice"),

    //Address form elements
    nameInputAddress: () => cy.get('input[name="name"]'),

    streetInputAddress: () => cy.get('input[name="street"]'),

    houseInputAddress: () => cy.get('input[name="house"]'),

    zipCodeInputAddress: () => cy.get('input[name="ZIP_code"]'),

    cityInputAddress: () => cy.get('input[name="city"]'),

    numberInputAddress: () => cy.get('input[name="number"]'),

    emailInputAddress: () => cy.get('input[name="email"]'),

    saveAddressFormBtn: () => cy.get('button[type="submit"]').contains("Save"),

    //Invoice form elements
    nipInputInvoice: () => cy.get('input[name="NIP"]'),

    nameInputInvoice: () => cy.get('input[name="name"]'),

    streetInputInvoice: () => cy.get('input[name="street"]'),

    zipCodeInputInvoice: () => cy.get('input[name="ZIP_code"]'),

    cityInputInvoice: () => cy.get('input[name="city"]'),

    saveInvoiceFormBtn: () => cy.get('button[type="submit"]').contains("Save"),

    //Delete Address
    addressDeleteBtn: (deleteAddressNumber) =>
      cy.get("button").contains("Delete").eq(deleteAddressNumber),

    confirmDeleteBtn: () => cy.get("button").contains("Yes, remove"),

    cancellDeleteBtn: () => cy.get("button").contains("Cancell"),

    //Edit address
    editBtn: () => cy.contains("Edit"),

    //Data
    formAddressElement: (valueNthOfType: number) =>
      cy.get(`[data-cy="addressForms"] > div:nth-of-type(${valueNthOfType})`),

    formInvoiceElement: (valueNthOfType: number) =>
      cy.get(
        `div[data-cy='invoicesForms'] > div:nth-of-type(${valueNthOfType})`
      ),

    formErrors: () => cy.get(".ErrMessage_errorText__1OrwW"),
  };

  //Add new address/invoice

  clickOnNewAddressBtn(): AddressDetails {
    this.elements.newAddressBtn().click();
    return this;
  }

  clickOnNewInvoiceBtn(): AddressDetails {
    this.elements.newInvoiceBtn().click();
    return this;
  }

  //Address functions
  fillNameInputAddress(value: string): AddressDetails {
    this.elements.nameInputAddress().type(value);
    return this;
  }

  fillStreetInputAddress(value: string): AddressDetails {
    this.elements.streetInputAddress().type(value);

    return this;
  }

  fillHouseInputAddress(value: string): AddressDetails {
    this.elements.houseInputAddress().type(value);
    return this;
  }

  fillZipCodeInputAddress(value: string): AddressDetails {
    this.elements.zipCodeInputAddress().type(value);
    return this;
  }

  fillCityInputAddress(value: string): AddressDetails {
    this.elements.cityInputAddress().type(value);
    return this;
  }

  fillNumberInputAddress(value: string): AddressDetails {
    this.elements.numberInputAddress().type(value);
    return this;
  }

  fillEmailInputAddress(value: string): AddressDetails {
    this.elements.emailInputAddress().type(value);
    return this;
  }

  editNameInputAddress(value: string): AddressDetails {
    this.elements.nameInputAddress().clear().type(value);
    return this;
  }

  editStreetInputAddress(value: string): AddressDetails {
    this.elements.streetInputAddress().clear().type(value);

    return this;
  }

  editHouseInputAddress(value: string): AddressDetails {
    this.elements.houseInputAddress().clear().type(value);
    return this;
  }

  editZipCodeInputAddress(value: string): AddressDetails {
    this.elements.zipCodeInputAddress().clear().type(value);
    return this;
  }

  editCityInputAddress(value: string): AddressDetails {
    this.elements.cityInputAddress().clear().type(value);
    return this;
  }

  editNumberInputAddress(value: string): AddressDetails {
    this.elements.numberInputAddress().clear().type(value);
    return this;
  }

  editEmailInputAddress(value: string): AddressDetails {
    this.elements.emailInputAddress().clear().type(value);
    return this;
  }

  clickOnSaveAddressBtn(): AddressDetails {
    this.elements.saveAddressFormBtn().click();

    return this;
  }

  //Invoice functions
  fillNipInputInvoice(value: string): AddressDetails {
    this.elements.nipInputInvoice().type(value);

    return this;
  }

  fillNameInputInvoice(value: string): AddressDetails {
    this.elements.nameInputInvoice().type(value);
    return this;
  }

  fillStreetInputInvoice(value: string): AddressDetails {
    this.elements.streetInputInvoice().type(value);
    return this;
  }

  fillZipCodeInputInvoice(value: string): AddressDetails {
    this.elements.zipCodeInputInvoice().type(value);
    return this;
  }

  fillCityInputInvoice(value: string): AddressDetails {
    this.elements.cityInputInvoice().type(value);
    return this;
  }

  clickOnSaveInvoiceBtn(): AddressDetails {
    this.elements.saveInvoiceFormBtn().click();

    return this;
  }

  clickOnDeleteAddressBtn(deleteAddressNumber): AddressDetails {
    this.elements.addressDeleteBtn(deleteAddressNumber).click();
    this.elements.confirmDeleteBtn().click();
    return this;
  }

  click;

  clickOnEditBtn(): AddressDetails {
    this.elements.editBtn().click();
    return this;
  }

  // Return data
  getAddressFormElement(valueNthOfType: number) {
    return this.elements.formAddressElement(valueNthOfType);
  }

  getFormErrors() {
    return this.elements.formErrors();
  }

  getInvoiceFormElement(valueNthOfType: number) {
    return this.elements.formInvoiceElement(valueNthOfType);
  }
}

export default AddressDetails;
