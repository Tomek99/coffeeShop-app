import HomePage from "../../pages/HomePage";
import BaseTest from "./BaseTest";

describe("user channing view & adding products to cart", () => {
  it("should set small view & add product to cart", () => {
    const PRODUCT_NAME: string = "Lavazza Tierra Bio-Organic for Africa";
    const PRODUCT_NUMBER: number = 0;

    const foundProductsInCart = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnControlerView()
      .selectView("rowsSmallIcon")
      .addProductCart(PRODUCT_NUMBER)
      .openCartBar()
      .findProductName();

    foundProductsInCart.should("have.text", PRODUCT_NAME);
  });

  it("should set medium view & add product products", () => {
    const PRODUCT_NAME: string = "Caffe Crema Dolce, 1 kg";
    const PRODUCT_NUMBER: number = 1;

    const foundProductsInCart = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnControlerView()
      .selectView("rowsMediumIcon")
      .addProductCart(PRODUCT_NUMBER)
      .openCartBar()
      .findProductName();

    foundProductsInCart.should("have.text", PRODUCT_NAME);
  });

  it("should set large view & add product to cart", () => {
    const PRODUCT_NAME: string = "Caffe Crema Classico, 1 kg";
    const PRODUCT_NUMBER: number = 2;

    const foundProductsInCart = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnControlerView()
      .selectView("rowsMediumIcon")
      .clickOnControlerView()
      .selectView("squaresIcon")
      .addProductCart(PRODUCT_NUMBER)
      .openCartBar()
      .findProductName();
    foundProductsInCart.should("have.text", PRODUCT_NAME);
  });

  it("should click each view & add product", () => {
    const PRODUCTS_LENGTH = 12;
    const PRODUCT_ONE = "Caffe Crema Dolce, 1 kg";
    const PRODUCT_TWO = "Qualita Rossa 250 g";

    const foundProducts = new HomePage()
      .visitHomePage()
      .openProductsPage()
      .clickOnControlerView()
      .selectView("rowsSmallIcon")
      .clickOnControlerView()
      .selectView("rowsMediumIcon")
      .clickOnControlerView()
      .selectView("squaresIcon")
      .getProducts();

    foundProducts.should("have.length", PRODUCTS_LENGTH);
    foundProducts.should(($products) => {
      expect($products.eq(1)).to.contain.text(PRODUCT_ONE);
      expect($products.eq(11)).to.contain.text(PRODUCT_TWO);
    });
  });
});
