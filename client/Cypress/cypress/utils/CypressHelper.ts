export default class CypressHelper {
  public static handleNotFoundElementExpection() {
    cy.on("uncaught:exception", (err) => {
      // Allow stripe error: "paymentRequest Element didn't mount normally"
      if (err.message.includes("paymentRequest")) {
        return false;
      }

      if (err.message.includes("Elements must be used within an IFRAME")) {
        return false;
      }
    });
  }

  public static generateRandomNumber(rangeNumber: number): number {
    return Math.floor(Math.random() * rangeNumber);
  }
}
