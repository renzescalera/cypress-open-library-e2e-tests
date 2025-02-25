class LogIn {
  constructor(cy) {
    this.cy = cy;
  }

  getUsernameField() {
    return this.cy.get("#username");
  }

  getPasswordField() {
    return this.cy.get("#password");
  }

  getLogInButton() {
    return this.cy.get(".cta-btn--primary");
  }

  getErrorMessage() {
    return this.cy.get(".error");
  }

  performLogIn(credentials) {
    if (typeof credentials !== "object") {
      throw new Error(
        "Invalid input: Expected an object with login credentials."
      );
    }

    const { username, password } = credentials;

    this.getUsernameField().type(username);
    this.getPasswordField().type(password);

    this.getLogInButton().should("be.visible").click();
  }
}

export default LogIn;
