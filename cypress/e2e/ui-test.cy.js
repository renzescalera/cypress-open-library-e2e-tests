import { advancedSearch, author } from "../support/page-objects/PageIndex";

describe("UI e2e test", () => {
  beforeEach(() => {
    cy.visit("/advancedsearch");
    cy.intercept("GET", "/lists/partials.json").as("partials");
  });

  it("Should advanced search Harry Potter by Rowling, allows sorting by rating, and displays the highest-rated book accurately", () => {
    // Using advanced search to fetch book title and author
    advancedSearch.getTitleField().type("Harry Potter");
    advancedSearch.getAuthorField().type("Rowling");
    advancedSearch.getSearchButton().should("be.visible").click();

    cy.wait("@partials");

    // Selecting the Author of the first search result
    cy.get('.searchResultItem:first-child [itemprop="author"] a')
      .should("be.visible")
      .click();

    cy.wait("@partials");

    author.sortWorksByOptions("Top Rated");

    cy.wait("@partials");

    // Validate that her top rated work is "Harry Potter and the Prisoner of Azkaban"
    cy.get(".resultTitle") // TODO: Move this to page-object - AuthorPage.js -- Probably make a function out of it
      .first()
      .should("contain", "Harry Potter and the Prisoner of Azkaban");
  });
});
