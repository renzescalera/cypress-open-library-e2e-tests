class BaseElements {
  constructor(cy) {
    this.cy = cy;
  }
  // TODO: This base elements might not be needed
  getEmailField() {
    return this.cy.get("#email");
  }

  getPasswordField() {
    return this.cy.get("#password");
  }

  getSubmitButton() {
    return this.cy.get("#submitLoginBtn");
  }

  login(username = null, password = null) {
    this.getEmailField().should("be.visible").type(username);
    this.getPasswordField().should("be.visible").type(password);
    this.getSubmitButton().should("be.visible").click();
  }

  validateElementsAfterSuccessfulLogin() {
    const existingElements = [
      "section-header",
      "cart-item",
      "cart-price",
      "cart-quantity",
      "btn-purchase",
      "shop-items",
    ];

    existingElements.forEach((element) => {
      this.cy.get(`.${element}`).should("be.visible").and("exist");
    });

    this.cy.get("#message").should("not.be.visible");
  }

  validateErrorMessage() {
    this.cy.get("#message").should("be.visible").and("exist");
  }
}

export default BaseElements;
