import ProductPage from "../../pages/ProductPage";
import ProductsPage from "../../pages/ProductsPage";
import CypressHelper from "../../utils/CypressHelper";
import BaseTest from "./BaseTest";

describe("Check thumbs when user is not logged in", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb(false);
  });

  const textAlertIfUserNotLoggedIn: string =
    "You cannot vote if you are not logged in.";

  it("Should vote thumb up", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbUp()
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggedIn);
  });

  it("Should vote thumb down", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbDown()
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggedIn);
  });
});

describe("Check thumbs when user is logged in & has already given vote", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb(true);
  });

  const textAlertIfUserVoted: string =
    "You can only vote once for each comment";

  it("Should vote thumb up", () => {
    const textAlert = new ProductsPage()
      .openRevelantProductPage(CypressHelper.generateRandomNumber(1))
      .openProductReviews()
      .clickOnThumbUp()
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserVoted);
  });

  it("Should vote thumb down", () => {
    const textAlert = new ProductsPage()
      .openRevelantProductPage(CypressHelper.generateRandomNumber(1))
      .openProductReviews()
      .clickOnThumbDown()
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserVoted);
  });
});

describe("Check thumbs when user is logged in &  hasn't voted yet", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb(true);
  });

  const textAlertIfUserNotVoted: string = "Thank you for your vote";

  it("Should vote thumb up", () => {
    const textAlert = new ProductsPage()
      .openRevelantProductPage(6)
      .openProductReviews()
      .clickOnThumbUp()
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserNotVoted);
  });

  it("Should vote thumb down", () => {
    const textAlert = new ProductsPage()
      .openRevelantProductPage(8)
      .openProductReviews()
      .clickOnThumbDown()
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserNotVoted);
  });
});
