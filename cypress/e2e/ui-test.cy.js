import { advancedSearch, author } from "../support/page-objects/PageIndex";
// TODO: don't forget: The framework should produce proper test reports.
describe("UI e2e test", () => {
  beforeEach(() => {
    cy.visit("/advancedsearch");
    cy.intercept("GET", "/lists/partials.json").as("partials");
  });

  it("Should advanced search Harry Potter by Rowling, allows sorting by rating, and displays the highest-rated book accurately", () => {
    const advancedSearchForBookTitleAndAuthorObject = {
      title: "Harry Potter",
      author: "Rowling",
    };

    // Searching for a book and author using the above object
    advancedSearch.fillAdvancedSearchForm(
      advancedSearchForBookTitleAndAuthorObject
    );

    advancedSearch.getSearchButton().should("be.visible").click();

    cy.wait("@partials");

    // Selecting the Author of the first search result
    cy.get('.searchResultItem:first-child [itemprop="author"] a') // TODO: Move this to POM - probably in books
      .should("be.visible")
      .click();

    cy.wait("@partials");

    // Sorting Author Works by Top Rated
    author.sortWorksByOptions("Top Rated");

    cy.wait("@partials");

    // Validating that the current sorting option is Top Rated
    author.getSortDropdown().should("contain", "Top Rated"); // TODO: Top Rated is hardcoded, find better solution

    // Validating that author's top rated work is "Harry Potter and the Prisoner of Azkaban"
    author.validateFirstResultBookTitle(
      "Harry Potter and the Prisoner of Azkaban" // TODO: Top Rated is hardcoded, find better solution
    );
  });

  // it('Retrieve No books directly matched your search', () => {})
});
