import AddressDetailsPage from "../../pages/AddressDetailsPage";
import BaseTest from "./BaseTest";

describe("Add & delete & empty invoice", () => {
  before(() => {
    BaseTest.performBasicStepsForAddressDetails();
  });

  it("add invoice", () => {
    const asseration = fillInvoiceForm();

    asseration.getInvoiceFormElement(1).should("exist");
  });

  it("delete invoice", () => {
    const asseration = fillInvoiceForm().clickOnDeleteAddressBtn(0);

    asseration.getInvoiceFormElement(2).should("not.exist");
  });

  it("try to add empty invoice", () => {
    const asseration = new AddressDetailsPage()
      .clickOnNewInvoiceBtn()
      .clickOnSaveInvoiceBtn();

    asseration.getFormErrors().should("have.length", 4);
  });
});

function fillInvoiceForm(): AddressDetailsPage {
  return new AddressDetailsPage()
    .clickOnNewInvoiceBtn()
    .fillNipInputInvoice("testNIP")
    .fillNameInputInvoice("Test test")
    .fillStreetInputInvoice("36 Test")
    .fillZipCodeInputAddress("00-000")
    .fillCityInputAddress("Warsaw")
    .clickOnSaveInvoiceBtn();
}
