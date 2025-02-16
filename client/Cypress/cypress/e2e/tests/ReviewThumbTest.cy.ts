import ApiRequest from "../../../apiRequest/apiRequest";
import ProductPage from "../../pages/ProductPage";
import ProductsPage from "../../pages/ProductsPage";
import CypressHelper from "../../utils/CypressHelper";
import BaseTest from "./BaseTest";

describe("Validate thumbs functionality when user IS NOT logged in", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb(false);
  });

  const textAlertIfUserNotLoggedIn: string =
    "You cannot vote if you are not logged in.";

  it("Should not allow voting 'thumb up'", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbUp(0)
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggedIn);
  });

  it("Should not allow voting 'thumb down' ", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbDown(0)
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggedIn);
  });
});

describe("Validate thumbs functionality when user IS logged in & has already given vote", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb(true);
  });

  const textAlertIfUserVoted: string =
    "You can only vote once for each comment";

  it("Should vote thumb up", () => {
    const textAlert = new ProductPage()
      .openProductReviews()
      .clickOnThumbUp(1)
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserVoted);
  });

  it("Should vote thumb down", () => {
    const textAlert = new ProductPage()
      .openProductReviews()
      .clickOnThumbDown(1)
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserVoted);
  });
});

describe.only("Validate thumbs functionality when user is logged in &  hasn't voted yet", () => {
  beforeEach(() => {
    ApiRequest.apiResetThumbsFromUserReview("67b2138e50327b1c4354ace7");
    BaseTest.performBasicStepsForReviewThumb(true);
  });

  const textAlertIfUserNotVoted: string = "Thank you for your vote";

  it("Should vote thumb up", () => {
    const textAlert = new ProductPage()
      .openProductReviews()
      .clickOnThumbUp(0)
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserNotVoted);
  });

  it("Should vote thumb down", () => {
    const textAlert = new ProductPage()
      .openProductReviews()
      .clickOnThumbDown(0)
      .getAlertText();

    textAlert.should("have.text", textAlertIfUserNotVoted);
  });
});
