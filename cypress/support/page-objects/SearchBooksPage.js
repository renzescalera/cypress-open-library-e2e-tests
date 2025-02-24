class SearchBooks {
  constructor(cy) {
    this.cy = cy;
  }

  getFirstResultAuthor() {
    return this.cy.get('.searchResultItem:first-child [itemprop="author"] a');
  }

  getErrorMessage() {
    return this.cy.get(".red");
  }
}

export default SearchBooks;
