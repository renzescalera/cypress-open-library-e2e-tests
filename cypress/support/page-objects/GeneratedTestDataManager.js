class GeneratedTestDataManager {
  constructor(cy) {
    this.cy = cy;
  }

  generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generates a random string of specified length using characters from the 'characters' string.
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  }
}

export default GeneratedTestDataManager;
