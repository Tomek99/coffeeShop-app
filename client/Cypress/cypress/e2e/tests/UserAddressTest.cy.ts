import AddressDetailsPage from "../../pages/AddressDetailsPage";
import BaseTest from "./BaseTest";

const editForm = {
  name: "EditedName",
  street: "EditedStreet",
  house: "111",
  zipCode: "00-000",
  city: "editedCity",
  number: "123456789",
  email: "editedEmail@gmail.com",
};

beforeEach(() => {
  BaseTest.performBasicStepsForAddressDetails();
});

describe("Add & delete & empty address", () => {
  it("add one address", () => {
    const assertion = fillAddressForm();

    assertion.getAddressFormElement(1).should("exist");

    deleteFirstAddressInRow();
  });

  it("delete address", () => {
    const assertion = fillAddressForm().clickOnDeleteAddressBtn(0);

    assertion.getAddressFormElement(2).should("not.exist");
  });

  it("try to add empty address", () => {
    const assertion = new AddressDetailsPage()
      .clickOnNewAddressBtn()
      .clickOnSaveAddressBtn()
      .getFormErrors();

    assertion.should("have.length", 3);
  });
});

describe("Edit address details", () => {
  it("name & street", () => {
    const assertion = fillAddressForm()
      .clickOnEditBtn()
      .editNameInputAddress(editForm.name)
      .editStreetInputAddress(editForm.street)
      .clickOnSaveAddressBtn();

    assertion.getAddressFormElement(1).should("contain", editForm.name);
    assertion.getAddressFormElement(1).should("contain", editForm.street);

    deleteFirstAddressInRow();
  });

  it("house & zip code", () => {
    const assertion = fillAddressForm()
      .clickOnEditBtn()
      .editHouseInputAddress(editForm.house)
      .editZipCodeInputAddress(editForm.zipCode)
      .clickOnSaveAddressBtn();

    assertion.getAddressFormElement(1).should("contain", editForm.house);
    assertion.getAddressFormElement(1).should("contain", editForm.zipCode);

    deleteFirstAddressInRow();
  });

  it("city & number & email", () => {
    const assertion = fillAddressForm()
      .clickOnEditBtn()
      .editCityInputAddress(editForm.city)
      .editNumberInputAddress(editForm.number)
      .editEmailInputAddress(editForm.email)
      .clickOnSaveAddressBtn();

    assertion.getAddressFormElement(1).should("contain", editForm.city);
    assertion.getAddressFormElement(1).should("contain", editForm.number);
    assertion.getAddressFormElement(1).should("contain", editForm.email);

    deleteFirstAddressInRow();
  });
});

function fillAddressForm(): AddressDetailsPage {
  return new AddressDetailsPage()
    .clickOnNewAddressBtn()
    .fillNameInputAddress("Test")
    .fillStreetInputAddress("Test")
    .fillHouseInputAddress("242")
    .fillZipCodeInputAddress("00-000")
    .fillCityInputAddress("Warsaw")
    .fillNumberInputAddress("111222333")
    .fillEmailInputAddress("test@gmail.com")
    .clickOnSaveAddressBtn();
}

function deleteFirstAddressInRow() {
  new AddressDetailsPage().clickOnDeleteAddressBtn(0);
}
