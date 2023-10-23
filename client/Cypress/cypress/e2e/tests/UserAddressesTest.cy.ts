import AddressDetails from "../../pages/AddressDetails";
import BaseTest from "./BaseTest";

beforeEach(() => {
  BaseTest.performBasicStepsForAddressDetails();
});

describe("Add & Delete & Empty address", () => {
  it("add one address", () => {
    const divContent = fillAddressForm().getAddressFormElements(1);

    divContent.eq(6).should("have.text", "test@gmail.com");

    deleteFirstAddressInRow();
  });

  it("delete address", () => {
    const divContent = fillAddressForm()
      .clickOnDeleteAddressBtn(0)
      .getAddressFormElements(1);

    divContent.should("not.exist");
  });

  it("add empty address", () => {
    const divContent = new AddressDetails()
      .clickOnNewAddressBtn()
      .clickOnSaveAddressBtn()
      .getAddressErrorsForm();

    divContent.should("have.length", 3);
  });
});

describe.only("Edit address details", () => {
  const editedAddressForm = {
    name: "EditedName",
    street: "EditedStreet",
    house: "111",
    zipCode: "00-000",
    city: "editedCity",
    number: "123456789",
    email: "editedEmail@gmail.com",
  };

  it("name & street", () => {
    const divContent = fillAddressForm()
      .clickOnEditBtn()
      .editNameInputAddress(editedAddressForm.name)
      .editStreetInputAddress(editedAddressForm.street)
      .clickOnSaveAddressBtn()
      .getAddressFormElements(1);

    divContent.eq(0).should("have.text", editedAddressForm.name);

    deleteFirstAddressInRow();
  });

  it("house & zip code", () => {
    const divContent = fillAddressForm()
      .clickOnEditBtn()
      .editHouseInputAddress(editedAddressForm.house)
      .editZipCodeInputAddress(editedAddressForm.zipCode)
      .clickOnSaveAddressBtn()
      .getAddressFormElements(1);

    divContent.eq(2).should("have.text", "111");

    deleteFirstAddressInRow();
  });

  it("city & number & email", () => {
    const divContent = fillAddressForm()
      .clickOnEditBtn()
      .editCityInputAddress(editedAddressForm.city)
      .editNumberInputAddress(editedAddressForm.number)
      .editEmailInputAddress(editedAddressForm.email)
      .clickOnSaveAddressBtn()
      .getAddressFormElements(1);

    divContent.eq(6).should("have.text", editedAddressForm.email);

    deleteFirstAddressInRow();
  });
});

function fillAddressForm(): AddressDetails {
  return new AddressDetails()
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
  new AddressDetails().clickOnDeleteAddressBtn(0);
}
