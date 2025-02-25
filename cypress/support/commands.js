Cypress.Commands.add("customApiRequest", (requestObject) => {
  const { method, endpoint, body } = requestObject;

  const requestPayload = {
    method,
    url: `${Cypress.env("base_url")}${endpoint}`,
    failOnStatusCode: false,
  };

  // If it is a GET call, no request body will be passed in
  if (method !== "GET") {
    requestPayload.body = body;
  }

  return cy.request(requestPayload);
});

Cypress.Commands.add(
  "searchBookTitleThenValidateAuthorWebsiteAndKey",
  (bookTitle, author, expectedWebsite) => {
    const searchBookRequestObject = {
      method: "GET",
      endpoint: `/search.json?title=${encodeURIComponent(
        bookTitle
      )}&author=${encodeURIComponent(author)}`,
    };

    cy.customApiRequest(searchBookRequestObject).then((response) => {
      expect(response.status).to.eq(
        200,
        "Expected 200 status code for search Book API"
      );

      const authorKey = response.body.docs[0].author_key[0];

      const retrieveAuthorDataRequestObject = {
        method: "GET",
        endpoint: `/authors/${authorKey}.json`,
      };

      cy.customApiRequest(retrieveAuthorDataRequestObject).then((response) => {
        expect(response.status).to.eq(
          200,
          "Expected 200 status code for author API"
        );

        const authorData = response.body;

        /**
         *  Only an Author that has website would enter the website validation
         *  If there are links, it validates that at least one of them has the expected website URL.
         *  Otherwise, it logs a message saying there is no available website for that author.
         * */
        if (authorData.links) {
          expect(
            authorData.links.some((link) => link.url === expectedWebsite),
            `${expectedWebsite} has been validated`
          ).to.be.true;
        } else {
          cy.log(`No available website for Author: ${authorData.name}`);
        }

        expect(authorData.key).to.equal(`/authors/${authorKey}`);
      });
    });
  }
);
