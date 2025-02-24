import AdvancedSearch from "../page-objects/AdvancedSearchPage";
import Author from "../page-objects/AuthorPage";
import BaseElements from "../page-objects/BaseElements";
import SearchBooks from "../page-objects/SearchBooksPage";

export const advancedSearch = new AdvancedSearch(cy);
export const author = new Author(cy);
export const baseElements = new BaseElements(cy);
export const searchBooks = new SearchBooks(cy);
