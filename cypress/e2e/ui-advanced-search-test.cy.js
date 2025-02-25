import {
  advancedSearch,
  author,
  generateTestData,
  searchBooks,
} from "../support/page-objects/PageIndex";

describe("Advanced Search UI e2e test", () => {
  beforeEach(() => {
    cy.visit("/advancedsearch");
    cy.intercept("GET", "/lists/partials.json").as("partials");
  });

  it("Should advanced search Harry Potter by Rowling, allows sorting by rating, and displays the highest-rated book accurately", () => {
    const advancedSearchForBookTitleAndAuthorObject = {
      title: "Harry Potter",
      author: "Rowling",
    };

    const sortingOption = "Top Rated";
    const expectedBookTitle = "Harry Potter and the Prisoner of Azkaban";

    // Searching for a book and author using the above object
    advancedSearch.fillAdvancedSearchForm(
      advancedSearchForBookTitleAndAuthorObject
    );

    advancedSearch.getSearchButton().should("be.visible").click();

    cy.wait("@partials");

    // Selecting the Author of the first search result
    searchBooks.getFirstResultAuthor().should("be.visible").click();

    cy.wait("@partials");

    // Sorting Author Works by Top Rated
    author.sortWorksByOptions(sortingOption);

    cy.wait("@partials");

    // Validating that the current sorting option is Top Rated
    author.getSortDropdown().should("contain", sortingOption);

    // Validating that author's top rated work is "Harry Potter and the Prisoner of Azkaban"
    author.validateFirstResultBookTitle(expectedBookTitle);
  });

  it("Should get an error message by retrieving a non-existent book using advanced search", () => {
    // Generated random strings are used to advanced search
    const invalidAdvancedSearchDataObject = {
      isbn: generateTestData.generateRandomString(5),
      subject: generateTestData.generateRandomString(3),
      place: generateTestData.generateRandomString(8),
      person: generateTestData.generateRandomString(4),
      publisher: generateTestData.generateRandomString(10),
    };

    advancedSearch.fillAdvancedSearchForm(invalidAdvancedSearchDataObject);

    advancedSearch.getSearchButton().should("be.visible").click();

    // Validating the error message
    searchBooks
      .getErrorMessage()
      .should("be.visible")
      .and("contain", "No books directly matched your search");
  });
});
