import { faker } from "@faker-js/faker";
import { logIn } from "../support/page-objects/PageIndex";

describe("Log in UI e2e test", () => {
  const validCredentials = {
    username: Cypress.env("user_name"),
    password: Cypress.env("password"),
  };

  const invalidCredentials = {
    username: faker.internet.email(),
    password: faker.internet.password(),
  };

  beforeEach(() => {
    cy.visit("/account/login");
  });

  it("Should be able to log in with valid credentials", () => {
    logIn.performLogIn(validCredentials);

    // Validating the url: /people/**/books
    cy.url().should("contain", "people").and("contain", "books");
    logIn.getErrorMessage().should("not.exist");
  });

  it("Should not be able to log in with invalid credentials", () => {
    logIn.performLogIn(invalidCredentials);

    // Validating the error message upon login with wrong credentials
    logIn
      .getErrorMessage()
      .should("be.visible")
      .and("contain", "No account was found with this email. Please try again");
  });
});
