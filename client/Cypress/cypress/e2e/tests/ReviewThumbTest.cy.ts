import ProductPage from "../../pages/ProductPage";
import BaseTest from "./BaseTest";

describe("Check thumbs when user is not looged", () => {
  beforeEach(() => {
    BaseTest.performBasicStepsForReviewThumb();
  });

  const textAlertIfUserNotLoggged: string =
    "You cannot vote if you are not logged in.";

  it("check thumb up", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbUp()
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggged);
  });

  it("check thumb down", () => {
    const alertText = new ProductPage()
      .openProductReviews()
      .clickOnThumbDown()
      .getAlertText();

    alertText.should("have.text", textAlertIfUserNotLoggged);
  });
});
