class AdvancedSearch {
  constructor(cy) {
    this.cy = cy;
  }

  getTitleField() {
    return this.cy.get("#qtop-title");
  }

  getAuthorField() {
    return this.cy.get("#qtop-author");
  }

  getIsbnField() {
    return this.cy.get("#qtop-isbn");
  }

  getSubjectField() {
    return this.cy.get("#qtop-subject");
  }

  getPlaceField() {
    return this.cy.get("#qtop-place");
  }

  getPersonField() {
    return this.cy.get("#qtop-place");
  }

  getPublisherField() {
    return this.cy.get("#qtop-publisher");
  }

  getSearchButton() {
    return this.cy.get(".cta-btn--search");
  }
}

export default AdvancedSearch;
