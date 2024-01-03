import { Locator, Page } from "@playwright/test";
import { DeliveryAddressInterface } from "../interfaces/DeliveryAddressInterface";
import { CompanyAddressInterface } from "../interfaces/CompanyAddressInterface";
import { InvoiceDetailsInterface } from "../interfaces/InvoiceDetailsInterface";

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
  private readonly userNameAddressInput: Locator;
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
    this.carrierLabel = page.locator('label[for="carrier"]');
    this.pickupLabel = page.locator('label[for="showroom"]');
    this.packageLockerLabel = page.locator('label[for="packageLocker"]');
    this.collectionLabel = page.locator('label[for="collectionAtPoint"]');

    // Purchasing as
    this.privatePersonLabel = page.locator("label[for='privatePerson']");
    this.companyLabel = page.locator("label[for='company']");

    //Recipient details
    this.recipientNameInput = page.getByLabel("Name");
    this.recipientPhoneInput = page.getByLabel("Phone number");
    this.recipientEmailInput = page.getByLabel("E-mail");

    //Delivery address
    this.userNameAddressInput = page.locator('input[name="name"]');
    this.streetAddressInput = page.locator("input[name='street']");
    this.houseAddressInput = page.getByPlaceholder("House");
    this.zipCodeAddressInput = page.locator("input[name='ZIP_code']");
    this.cityAddressInput = page.locator("input[name='city']");
    this.numberAddressInput = page.getByPlaceholder("Number");
    this.emailAddressInput = page.getByPlaceholder("email");

    //Company details for invoice
    this.companyNipInput = page.getByPlaceholder("NIP");
    this.companyNameInput = page.locator("input[name='companyName']");
    this.companyStreetInput = page.locator("input[name='companyStreet']");
    this.companyZipCodeInput = page.locator("input[name='companyZIPcode']");
    this.companyCityInput = page.locator("input[name='companyCity']");

    //Private person invoice details
    this.invoiceDetailsLabel = page.getByText("I would like to provide other");
    this.invoiceName = page.locator('input[name="i_name"]');
    this.invoiceStreet = page.getByPlaceholder("Street and number");
    this.invoiceZipCode = page.locator('input[name="i_ZIP_code"]');
    this.invoiceCity = page.locator('input[name="i_city"]');

    // Payment
    this.onlinePayment = page.locator("label[for='online_payment']");
    this.onlinePaymentCard = page.locator("label[for='online_payment_card']");
    this.blikPayment = page.locator("label[for='blik']");
    this.traditionalPayment = page.locator("label[for='traditional_payment']");
    this.paymentOnDelviery = page.locator("label[for='payment_on_delivery']");
    this.summaryBtn = page.getByRole("button", { name: "Summary" });

    //ExtraOptions
    this.commentBtn = page.getByLabel("comment");
    this.commentArea = page.getByPlaceholder("Your comments");
  }

  // Delivery
  async clickOnCarrier() {
    await this.carrierLabel.click();
  }
  async clickOnPickup() {
    await this.pickupLabel.click();
  }
  async clickOnPackageLocker() {
    await this.packageLockerLabel.click();
  }
  async clickOnCollection() {
    await this.collectionLabel.click();
  }

  // Purchasing as
  async clickOnPrivatePerson() {
    await this.privatePersonLabel.click();
  }
  async clickOnCompany() {
    await this.companyLabel.click();
  }

  //Recipient details
  async fillRecipientName(value: string) {
    await this.recipientNameInput.fill(value);
  }
  async fillRecipientPhone(value: string) {
    await this.recipientPhoneInput.fill(value);
  }
  async fillRecipientEmail(value: string) {
    await this.recipientEmailInput.fill(value);
  }

  //Delivery address
  async fillNameAddress(value: string) {
    await this.userNameAddressInput.fill(value);
  }
  async fillStreetAddress(value: string) {
    await this.streetAddressInput.fill(value);
  }
  async fillHouseAddress(value: string) {
    await this.houseAddressInput.fill(value);
  }
  async fillZipCodeAddress(value: string) {
    await this.zipCodeAddressInput.fill(value);
  }
  async fillCityAddress(value: string) {
    await this.cityAddressInput.fill(value);
  }
  async fillNumberAddress(value: string) {
    await this.numberAddressInput.fill(value);
  }
  async fillEmailAddress(value: string) {
    await this.emailAddressInput.fill(value);
  }

  async fillDeliveryAddressForm(data: DeliveryAddressInterface) {
    await this.userNameAddressInput.fill(data.name);
    await this.streetAddressInput.fill(data.street);
    await this.houseAddressInput.fill(data.house);
    await this.zipCodeAddressInput.fill(data.zipCode);
    await this.cityAddressInput.fill(data.city);
    await this.numberAddressInput.fill(data.number);
    await this.emailAddressInput.fill(data.email);
  }

  //Company details for invoice
  async fillcompanyNip(value: string) {
    await this.companyNipInput.fill(value);
  }
  async fillcompanyName(value: string) {
    await this.companyNameInput.fill(value);
  }
  async fillcompanyStreet(value: string) {
    await this.companyStreetInput.fill(value);
  }
  async fillcompanyZipCode(value: string) {
    await this.companyZipCodeInput.fill(value);
  }
  async fillcompanyCity(value: string) {
    await this.companyCityInput.fill(value);
  }

  async fillCompanyForm(data: CompanyAddressInterface) {
    await this.companyNipInput.fill(data.nip);
    await this.companyNameInput.fill(data.name);
    await this.companyStreetInput.fill(data.street);
    await this.companyZipCodeInput.fill(data.zipCode);
    await this.companyCityInput.fill(data.city);
  }

  //Private person invoice details
  async clickOnProvideInvoiceDetails() {
    await this.invoiceDetailsLabel.click();
  }
  async fillInvoiceName(value: string) {
    await this.invoiceName.fill(value);
  }
  async fillInvoiceStreet(value: string) {
    await this.invoiceStreet.fill(value);
  }
  async fillInvoiceZipCode(value: string) {
    await this.invoiceZipCode.fill(value);
  }
  async fillInvoiceCity(value: string) {
    await this.invoiceCity.fill(value);
  }

  async fillInvoiceForm(data: InvoiceDetailsInterface) {
    await this.invoiceName.fill(data.name);
    await this.invoiceStreet.fill(data.street);
    await this.invoiceZipCode.fill(data.zipCode);
    await this.invoiceCity.fill(data.city);
  }

  // Payment
  async clickOnlinePayment() {
    await this.onlinePayment.click();
  }
  async clickOnOnlinePaymentCard() {
    await this.onlinePaymentCard.click();
  }
  async clickOnBlikPayment() {
    await this.blikPayment.click();
  }
  async clickOnTraditionalPayment() {
    await this.traditionalPayment.click();
  }
  async clickOnPaymentOnDelviery() {
    await this.paymentOnDelviery.click();
  }

  async clickOnSummaryBtn() {
    await this.summaryBtn.click();
  }

  //ExtraOptions
  async clickOnCommentBtn() {
    await this.commentBtn.click();
  }
  async fillCommentArea(value: string) {
    await this.commentArea.fill(value);
  }
}
