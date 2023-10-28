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

  //   it("delete invoice", () => {});

  //   it("try to add empty invoice", () => {});
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
