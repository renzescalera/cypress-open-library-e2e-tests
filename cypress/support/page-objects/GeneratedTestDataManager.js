class GeneratedTestDataManager {
  constructor(cy) {
    this.cy = cy;
  }

  generateRandomString(length) {
    if (isNaN(length) || 0 >= length) {
      throw new Error("Invalid input: Pass a valid number only");
    }

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generates a random string of specified length using characters from the 'characters' string.
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  }
}

export default GeneratedTestDataManager;
