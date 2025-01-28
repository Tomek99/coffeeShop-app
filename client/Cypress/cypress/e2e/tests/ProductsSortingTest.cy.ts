import { should } from "chai";
import HomePage from "../../pages/HomePage";

describe("user sorting products", () => {
  it("should sort from the most popular", () => {
    const RATES: string[] = ["(6)", "(3)", "(2)", "(1)"];

    const productsRates = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("From the most popular")
      .getProductsRates();

    productsRates.should(($item) => {
      expect($item.eq(0)).to.contain.text(RATES[0]);
      expect($item.eq(1)).to.contain.text(RATES[1]);
      expect($item.eq(4)).to.contain.text(RATES[2]);
      expect($item.eq(7)).to.contain.text(RATES[3]);
    });
  });

  it("should sort from the most relevant", () => {
    const PRODUCT_NAME: string = "Espresso Italiano Aromatico";

    const foundProducts = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("From the most relevant")
      .getProducts();

    foundProducts.should(($item) => {
      expect($item.eq(0)).to.contain.text(PRODUCT_NAME);
    });
  });

  it("should sort from rating: from the best", () => {
    new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("Customer rating: from the best");
  });

  it("should sort price from the cheapest", () => {
    const PRODUCT_NAME_ONE: string = "Lavazza Tierra Bio-Organic for Amazonia";
    const PRODUCT_NAME_TWO: string = "Qualita Oro - Perfect Symphony 250 g";

    const productsPrice = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("Price: from the cheapest")
      .getProducts();

    productsPrice.should(($item) => {
      expect($item.eq(0)).to.contain.text(PRODUCT_NAME_ONE);
      expect($item.eq(1)).to.contain.text(PRODUCT_NAME_TWO);
    });
  });

  it.only("should sort price from the most expensive", () => {
    const PRODUCT_NAME_ONE: string = "Crema e Aroma, 1 kg";
    const PRODUCT_NAME_TWO: string = "Caffe Crema Classico, 1 kg";

    const productsPrice = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("Price: from the most expensive")
      .getProducts();

    productsPrice.should(($item) => {
      expect($item.eq(0)).to.contain.text(PRODUCT_NAME_ONE);
      expect($item.eq(1)).to.contain.text(PRODUCT_NAME_TWO);
    });
  });
});
