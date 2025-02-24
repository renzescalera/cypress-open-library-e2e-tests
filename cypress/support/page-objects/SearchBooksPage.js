class SearchBooks {
  constructor(cy) {
    this.cy = cy;
  }

  getFirstResultAuthor() {
    return this.cy.get('.searchResultItem:first-child [itemprop="author"] a');
  }
}

export default SearchBooks;
