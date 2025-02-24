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

  fillAdvancedSearchForm(fields = {}) {
    if (typeof fields !== "object") {
      throw new Error(
        "Invalid input: Expected an object with search parameters."
      );
    }

    const advancedSearchFieldSelectors = {
      title: this.getTitleField(),
      author: this.getAuthorField(),
      isbn: this.getIsbnField(),
      subject: this.getSubjectField(),
      place: this.getPlaceField(),
      person: this.getPersonField(),
      publisher: this.getPublisherField(),
    };

    Object.entries(fields).forEach(([key, value]) => {
      if (value && advancedSearchFieldSelectors[key]) {
        advancedSearchFieldSelectors[key].type(value);
      }
    });
  }
}

export default AdvancedSearch;
