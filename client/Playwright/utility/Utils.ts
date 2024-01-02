export default class Utils {
  public static generateRandomNumber(rangeNumber: number): number {
    return Math.floor(Math.random() * rangeNumber);
  }
}
