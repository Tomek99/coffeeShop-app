import { Locator, Page } from "@playwright/test";

export class OrderPage {
  private readonly page: Page;

  // Delivery
  private readonly carrierLabel: Locator;
  private readonly pickupLabel: Locator;
  private readonly packageLockerLabel: Locator;
  private readonly collectionLabel: Locator;

  // Purchasing as
  private readonly privatePersonLabel: Locator;
  private readonly companyLabel: Locator;

  //Recipient details
  private readonly recipientNameInput: Locator;
  private readonly recipientPhoneInput: Locator;
  private readonly recipientEmailInput: Locator;

  //Delivery address
  private readonly addressInput: Locator;
  private readonly streetAddressInput: Locator;
  private readonly houseAddressInput: Locator;
  private readonly zipCodeAddressInput: Locator;
  private readonly cityAddressInput: Locator;
  private readonly numberAddressInput: Locator;
  private readonly emailAddressInput: Locator;

  //Company details for invoice
  private readonly companyNipInput: Locator;
  private readonly companyNameInput: Locator;
  private readonly companyStreetInput: Locator;
  private readonly companyZipCodeInput: Locator;
  private readonly companyCityInput: Locator;

  //Private person invoice details
  private readonly invoiceDetailsLabel: Locator;
  private readonly invoiceName: Locator;
  private readonly invoiceStreet: Locator;
  private readonly invoiceZipCode: Locator;
  private readonly invoiceCity: Locator;

  // Payment
  private readonly onlinePayment: Locator;
  private readonly onlinePaymentCard: Locator;
  private readonly blikPayment: Locator;
  private readonly traditionalPayment: Locator;
  private readonly paymentOnDelviery: Locator;
  private readonly summaryBtn: Locator;

  //ExtraOptions
  private readonly commentBtn: Locator;
  private readonly commentArea: Locator;

  constructor(page: Page) {
    this.page = page;

    //Delviery
    this.carrierLabel = page.getByLabel("carrier");
    this.pickupLabel = page.getByLabel("showroom");
    this.packageLockerLabel = page.getByLabel("packageLocker");
    this.collectionLabel = page.getByLabel("collectionAtPoint");

    // Purchasing as
    this.privatePersonLabel = page.getByLabel("privatePerson");
    this.companyLabel = page.getByLabel("company");

    //Recipient details
    this.recipientNameInput = page.getByLabel("");
    this.recipientPhoneInput = page.getByLabel("");
    this.recipientEmailInput = page.getByLabel("");

    //Delivery address
    this.addressInput = page.getByLabel("");
    this.streetAddressInput = page.getByLabel("");
    this.houseAddressInput = page.getByLabel("");
    this.zipCodeAddressInput = page.getByLabel("");
    this.cityAddressInput = page.getByLabel("");
    this.numberAddressInput = page.getByLabel("");
    this.emailAddressInput = page.getByLabel("");

    //Company details for invoice
    this.companyNipInput = page.getByLabel("");
    this.companyNameInput = page.getByLabel("");
    this.companyStreetInput = page.getByLabel("");
    this.companyZipCodeInput = page.getByLabel("");
    this.companyCityInput = page.getByLabel("");

    //Private person invoice details
    this.invoiceDetailsLabel = page.getByRole("button", { name: "" });
    this.invoiceName = page.getByPlaceholder("");
    this.invoiceStreet = page.getByPlaceholder("");
    this.invoiceZipCode = page.getByPlaceholder("");
    this.invoiceCity = page.getByPlaceholder("");

    // Payment
    this.onlinePayment = page.getByLabel("");
    this.onlinePaymentCard = page.getByLabel("");
    this.blikPayment = page.getByLabel("");
    this.traditionalPayment = page.getByLabel("");
    this.paymentOnDelviery = page.getByLabel("");
    this.summaryBtn = page.getByRole("button", { name: "" });

    //ExtraOptions
    this.commentBtn = page.getByLabel("comment");
    this.commentArea = page.getByPlaceholder("Your comments");
  }
}
