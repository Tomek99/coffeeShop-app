import AddressDetails from "../../pages/AddressDetails";
import BaseTest from "./BaseTest";

beforeEach(() => {
  BaseTest.performBasicStepsForAddressDetails();
});

describe("Add & Delete & Empty address", () => {
  it("add one address", () => {
    const divContent = new AddressDetails()
      .clickOnNewAddressBtn()
      .fillNameInputAddress("Test")
      .fillStreetInputAddress("Test")
      .fillHouseInputAddress("242")
      .fillZipCodeInputAddress("00-000")
      .fillCityInputAddress("Warsaw")
      .fillNumberInputAddress("111222333")
      .fillEmailInputAddress("test@gmail.com")
      .clickOnSaveAddressBtn()
      .getAddressFormElements(1);

    divContent.eq(6).should("have.text", "test@gmail.com");

    new AddressDetails().clickOnDeleteAddressBtn(0);
  });

  it("delete address", () => {
    const divContent = new AddressDetails()
      .clickOnNewAddressBtn()
      .fillNameInputAddress("Test")
      .fillStreetInputAddress("Test")
      .fillHouseInputAddress("242")
      .fillZipCodeInputAddress("00-000")
      .fillCityInputAddress("Warsaw")
      .fillNumberInputAddress("111222333")
      .fillEmailInputAddress("test@gmail.com")
      .clickOnSaveAddressBtn()
      .clickOnDeleteAddressBtn(0)
      .getAddressFormElements(1);

    divContent.should("not.exist");
  });

  it.only("add empty address", () => {
    const divContent = new AddressDetails()
      .clickOnNewAddressBtn()
      .clickOnSaveAddressBtn()
      .getAddressErrorsForm();

    divContent.should("have.length", 3);
  });
});

describe("Edit address details", () => {
  it("name & street", () => {});

  it("house & zip code", () => {});

  it("city & number & email", () => {});
});
