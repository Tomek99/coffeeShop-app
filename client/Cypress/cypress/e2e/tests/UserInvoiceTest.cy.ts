import AddressDetailsPage from "../../pages/AddressDetailsPage";
import BaseTest from "./BaseTest";

type InvoiceData = {
  nip: string;
  companyName: string;
  steet: string;
  zipCode: string;
  cityName: string;
};

const invoiceData: InvoiceData = {
  nip: "1231231230",
  companyName: "Acme Corp",
  steet: "1 Main Street",
  zipCode: "00-001",
  cityName: "Warsaw",
};

describe("Add & delete & empty invoice", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForAddressDetails();
  });

  it("should add invoice", () => {
    const object = fillInvoiceFormAndAdd(invoiceData);

    object.getInvoiceFormElement(1).should("exist");

    object.clickOnDeleteAddressBtn(0);
  });

  it("should delete invoice", () => {
    fillInvoiceFormAndAdd(invoiceData).clickOnDeleteAddressBtn(0);

    cy.get(".InvoiceItem_content__muuOU > :nth-child(1)").should("not.exist");
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
