## Technical Assessment for Test Engineer – Renz Escalera

- This is the technical assessment submission for the Test Engineer position by Renz Escalera. The test automation framework is built using Cypress, a modern JavaScript-based test automation tool.

## Why Cypress?

- I selected Cypress for this assessment due to its developer-friendly approach, seamless support for both UI and API testing, and robust debugging capabilities. My decision is based on both my experience with Cypress and its technical advantages.

## Key Benefits of Cypress

- API & UI Testing: Cypress allows efficient testing of both backend APIs (cy.request()) and frontend UI interactions in a single framework.
- Fast Execution & Real-Time Debugging: Runs directly in the browser, making tests faster and easier to debug.
- Automatic Waits & Reduced Flakiness: No need for explicit waits or sleep commands, ensuring more reliable tests.
- Built-in Screenshots & Video Recording: Helps in debugging test failures without additional configuration.
- Extensive Experience: I have hands-on and professional experience using Cypress for both API and UI automation, enabling me to follow best practices and efficient implementation.

## How to setup the environment variables

- Inside of the .env file in the root folder contains the necessary environment variables such as base url, username, and password.
- username and passowrd are not currently setup for security purposes. Follow the example below to correctly set it up:
  `USER_NAME=fakeEmail@test.com`
  `PASSWORD=Password123`

## Setting Up and Running Cypress Tests

1. Clone the repository using the command: `git clone https://github.com/renzescalera/renz-assessment-test-engineer.git`
2. Navigate to the project folder - Example: `cd C:\users\your-computer\renz-assessment-test-engineer`
3. Install dependencies using the command: `npm install`
   - After installation, use the command: `npm -v` this confirms successful installation
4. Now Cypress can run using the command below:
   - To run Cypress UI: `npx cypress open`
   - To run Cypress in headless mode: `npx cypress run`

## Test Reports

- The Test Reports can be found in this file path: \renz-assessment-test-engineer\cypress\reports
- This contains all test execution report of each test cases or it blocks. Below is the identifier which test report file contains a specific test.

1. mochawesome.html - This contains the test report for the api-test.cy.js
2. mochawesome_001.html - This contains the test report for ui-advanced-search-test.cy.js
3. mochawesome_002.html - This contains the test report for ui-log-in-test.cy.js

- Mochawesome for HTML reports can also be viewed using the command: `npx mochawesome-report-generator cypress/reports/mochawesome.json`

## Folder Structure

1. **cypress/e2e**: Contains the spec files or test frameworks built with Cypress.
   `api-test.cy.js` - This file contains all the api e2e tests based on the assessment and other tests that covers negative test scenarios for the given endpoints.

   `ui-advanced-search-test.cy.js` - This contains the tests for ui on advanced search feature. It also covers the negative test sceanrio of it.

   `ui-log-in-test.cy.js` - An additional tests for the log in functionality of the website. It also tests that user will not be able to log in successfully with a wrong log in credentials.

2. **cypress/fixtures**: Storage of the static data files which is in JSON format.
   `books-data.json` - This contains the test data for the advanced search ui test. It holds the data for title, author, and website that are used for advanced searching.

3. **cypress/reports**: This contains the test reports of all api and ui tests

4. **cypress/support**: This contains the important commands and functions for the e2e tests

5. **cypress/page-objects**: This contains the selectors and functions that are used in the e2e tests.

   #### AdvancedSearchPage.js

   - This class contains selectors and functions specifically used for Advanced Search page of the website.

     - Selectors:
       - `getTitleField` - Title input field in the advanced search form
       - `getAuthorField` - Author input field in the advanced search form
       - `getIsbnField` - ISBN input field in the advanced search form
       - `getSubjectField` - Subject input field in the advanced search form
       - `getPlaceField` - Place input field in the advanced search form
       - `getPersonField` - Person input field in the advanced search form
       - `getPublisherField` - Publisher input field in the advanced search form
     - `getSearchButton` - search button in the advanced search form

     - Functions:

       - `advancedSearch.fillAdvancedSearchForm` - This function is used to fill out the Advanced Search form by populating input fields with search parameters. In addition, it has an error handling that checks if the argument used is not an object, then it will throw an error message.

       - parameter: fields (Object) - Contains data in key-value pairs for advance search form
       - example usage: advancedSearch.fillAdvancedSearchForm({ title: "JavaScript", author: "John Doe" });

   #### AuthorPage.js

   - This class contains selectors and functions specifically used for Author page of the website. The Author page displays books/works and the information of the specific author.
     Selectors:
     `getSortDropdown` - Dropdown for sorting of the Author's works. It has the following options: Most Editions, First Published, Most Recent, Top Rated, Reading Log, and Random
     `bookTitlesInAuthorPage` - This returns all the book titles of the Author

     Functions:
     `sortWorksByOptions` - This function takes a parameter as a selected option for sorting. It clicks on the sort dropdown then select a chosen option. It also has an error handling that let you know if you use an invalid choice and provides you the right options to choose from.

     - parameter: option (String) - Contains the option that will be selected in the sorting dropdown
     - example usage: author.sortWorksByOptions("Most Recent");

     `validateFirstResultBookTitle` - This function validates the first title of the book

     - parameter: title (String) - Contains the expected title of the first book that will be validated
     - example usage: author.validateFirstResultBookTitle("Harry Potter");

   #### GeneratedTestDataManager.js

   - This class contains a function that generates an alphanumeric string. The length of the generated string is based on the given parameter
     Functions:
     `generateRandomString` - This function generates a random string based on the given number of length

     - parameter: length (Number) - The length of the random alphanumberic string that will be generated
     - example usage: generateTestData.generateRandomString(8)

   #### LogInPage.js

   - This class contains the selectors and functions that are used in the Log In page.
     Selectors:
     `getUsernameField` - Username input field in the Log In form
     `getPasswordField` - Password input field in the Log In form
     `getLogInButton` - Login button in the Log In form
     `getErrorMessage` - Error message. This is the HTML element displayed when user logged in with wrong credentials

     Functions:
     `performLogIn` - This function performs the entire Log In process from filling out username and password input field and clicking the log in button. It take an object as a parameter that contains the login details and it also has an error handling that it throws an error if it is not a valid parameter.

     - parameter: credentials (Object) - Contains the log in credentials such as username and password in a key-value pair format or JSON object format
     - example usage: logIn.performLogIn({username: 'fakeEmail@test.com', password: 'Pass123'})

   #### PageIndex.js

   - Serves as a centralized entry point for importing, exporting and creating instances of the page-objects.

   #### SearchBooksPage.js

   - This class contains the selectors that are used in Search Books page
     Selectors:
     `getFirstResultAuthor` - This is the selector of the first Author's name. Upon clicking on it, it redirects to the Author's page.
     `getErrorMessage` - This is the selector of the error message when you advanced search and it returns no result

6. **cypress/commands**: This contains the generic reusable cypress custom commands that could be used in all e2e tests. As of the moment, it contains the functions that are used in the api-test suite.

   #### customApiRequest

   - This function make a custom API request. This is used for cypress to make a certain api request call. For POST and PUT call, a request body object is only passed in upon api call.

     - parameter: requestObject (Object) - Contains the method, nedpoint, and body of the api request
     - example usage: cy.customApiRequest({method: 'GET', endpoint: '/sample-endpoint'})

   #### searchBookTitleThenValidateAuthorWebsiteAndKey

   - This function performs a series of API requests to search for a book by its title, retrieves the author's data using author's key, and validates certain data of the response such as the Author's website and key. If the author does not have a website, cypress will log that there is no available website for the autor. The test data used in its test can be found cypress/fixtures/books-data.json

     - parameters:
       bookTitle (String) - title of the book
       author (String) - Author of the book
       expectedWebsite (String) - Website of the Author

       - example usage: cy.searchBookTitleThenValidateAuthorWebsiteAndKey("Rich Dad, Poor Dad", "Robert Kiyosaki", "http://www.richdad.com");
