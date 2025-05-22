import { Page } from "@playwright/test";

export class ApiTests {
  public static async addCompletedReviewProduct(
    page: Page,
    userId: string
  ): Promise<string> {
    const response = await page.request.post(
      "http://localhost:5000/api/reviews/set-completed-review-for-testing",
      {
        data: { userId },
      }
    );

    const reviewId = await response.text(); // bo zwracasz sam string w body
    if (!reviewId) {
      throw new Error("❌ API nie zwróciło reviewId!");
    }

    return reviewId;
  }

  public static async deleteReviewProduct(page: Page, id: string) {
    const cleanedId = id.replace(/^"|"$/g, "");
    console.log(`cleaned id: ${cleanedId}`);
    await page.request.delete(
      "http://localhost:5000/api/reviews/delete-review",
      {
        data: { id: cleanedId },
      }
    );
  }
}
