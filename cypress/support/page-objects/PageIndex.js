import AdvancedSearch from "../page-objects/AdvancedSearchPage";
import Author from "../page-objects/AuthorPage";
import BaseElements from "../page-objects/BaseElements";

export const advancedSearch = new AdvancedSearch(cy);
export const author = new Author(cy);
export const baseElements = new BaseElements(cy);
