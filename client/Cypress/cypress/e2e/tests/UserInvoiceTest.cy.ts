import AddressDetailsPage from "../../pages/AddressDetailsPage";
import BaseTest from "./BaseTest";

type InvoiceData = {
  nip: string;
  companyName: string;
  steet: string;
  zipCode: string;
  cityName: string;
};

describe("Add & delete & empty invoice", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForAddressDetails();
  });

  it("should add invoice", () => {
    const invoiceData: InvoiceData = {
      nip: "1234567890",
      companyName: "Acme Corp",
      steet: "1 Main Street",
      zipCode: "00-001",
      cityName: "Warsaw",
    };

    const object = fillInvoiceFormAndAdd(invoiceData);

    object.getInvoiceFormElement(1).should("exist");
  });

  it("should delete invoice", () => {
    const invoiceData: InvoiceData = {
      nip: "9999999999",
      companyName: "Acme Corp",
      steet: "1 Main Street",
      zipCode: "00-001",
      cityName: "Warsaw",
    };

    fillInvoiceFormAndAdd(invoiceData).clickOnDeleteInvoiceBtn();

    cy.get('[data-cy="invoicesForms"]').should("not.contain", invoiceData.nip);
  });

  it("should try to add empty invoice", () => {
    const asseration = new AddressDetailsPage()
      .clickOnNewInvoiceBtn()
      .clickOnSaveInvoiceBtn();

    asseration.getFormErrors().should("have.length", 4);
  });
});

// --------------------------------------------------
// describe("Edit invoice details", () => {
//   it("", () => {});

//   it("", () => {});

//   it("", () => {});

//   it("", () => {});

//   it("", () => {});
// });

// --------------------------------------------------
function fillInvoiceFormAndAdd(invoiceData: InvoiceData): AddressDetailsPage {
  return new AddressDetailsPage()
    .clickOnNewInvoiceBtn()
    .fillNipInputInvoice(invoiceData.nip)
    .fillNameInputInvoice(invoiceData.companyName)
    .fillStreetInputInvoice(invoiceData.steet)
    .fillZipCodeInputAddress(invoiceData.zipCode)
    .fillCityInputAddress(invoiceData.cityName)
    .clickOnSaveInvoiceBtn();
}
