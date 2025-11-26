export default class ApiRequest {
  public static apiResetThumbsFromUserReview(reviewId) {
    cy.request(
      "PUT",
      "http://localhost:5000/api/reviews/reset-thumbs-from-review",
      {
        reviewId: reviewId, // Wysyłamy poprawny parametr
      }
    ).then((response) => {
      expect(response.status).to.eq(200); // 200 zamiast 201, bo to aktualizacja
      //   expect(response.body).to.have.property("likes", 0);
      //   expect(response.body).to.have.property("dislikes", 0);
      //   expect(response.body.usersIdVoted).to.be.an("array").that.is.empty;
    });
  }
}
