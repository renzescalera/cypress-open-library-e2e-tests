class Author {
  constructor(cy) {
    this.cy = cy;
  }

  getSortDropdown() {
    return this.cy.get(".sort-dropper");
  }

  sortWorksByOptions(option) {
    const sortOptionsObject = {
      "Most Editions": "Editions",
      "First Published": "Old",
      "Most Recent": "New",
      "Top Rated": "Rating",
      "Reading Log": "ReadingLog",
      Random: "Random",
    };

    const selectedSortOption = sortOptionsObject[option];

    if (!selectedSortOption) {
      throw new Error(
        `Invalid sorting option: "${option}". Choose from: ${Object.keys(
          sortOptionsObject
        ).join(", ")}`
      );
    }

    this.getSortDropdown().should("be.visible").click();
    cy.get(`[data-ol-link-track="SearchSort|${selectedSortOption}"]`)
      .should("be.visible")
      .click();
  }
}

export default Author;
