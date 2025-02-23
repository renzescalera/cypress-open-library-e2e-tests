describe("API e2e test", () => {
  it("Should Search different Books and Validate corresponding Author data", () => {
    cy.fixture("books-data.json").then((booksData) => {
      const booksArray = booksData.books;

      booksArray.forEach((book) => {
        cy.searchBookTitleThenValidateAuthorWebsiteAndKey(
          book.title,
          book.author,
          book.website
        );
      });
    });
  });

  it("Retrieve a non-existent Book", () => {
    cy.generateRandomString(10).then((invalidBookTitle) => {
      // TODO: Maybe worth it to move it to POM
      const retrieveInvalidBookTitleRequestObject = {
        method: "GET",
        endpoint: `/search.json?title=${encodeURIComponent(invalidBookTitle)}`,
      };

      cy.customApiRequest(retrieveInvalidBookTitleRequestObject).then(
        (response) => {
          const responseBody = response.body;

          expect(response.status).to.eq(
            200,
            "Expected 200 status code for non-existent book"
          );

          expect(responseBody.docs.length).to.equal(0);
          expect(responseBody.numFound).to.equal(0);
        }
      );
    });
  });

  it("Retrieve an Author using an invalid key", () => {
    cy.generateRandomString(10).then((invalidAuthorKey) => {
      const retrieveInvalidAuthorDataRequestObject = {
        method: "GET",
        endpoint: `/authors/${invalidAuthorKey}.json`,
      };

      cy.customApiRequest(retrieveInvalidAuthorDataRequestObject).then(
        (response) => {
          expect(response.status).to.eq(
            404,
            "Expected 404 status code for invalid author"
          );

          // Ensure the response body is properly parsed before validation
          let responseBody;

          try {
            responseBody = JSON.parse(response.body); // Convert a stringified JSON into an actual object.
          } catch (e) {
            responseBody = response.body; // If already an object, use as is.
          }

          expect(responseBody).to.have.property("error", "notfound");
          expect(responseBody).to.have.property(
            "key",
            `/authors/${invalidAuthorKey}`
          );
        }
      );
    });
  });
});
