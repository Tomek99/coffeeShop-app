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

  it.only("should sort price from the cheapest", () => {
    new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("Price: from the cheapest");
  });

  it("should sort price from the most expensive", () => {
    new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnSortControler()
      .clickOnSelectSortingOption("Price from the most expensive");
  });
});
