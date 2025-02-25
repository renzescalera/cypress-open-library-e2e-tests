import AdvancedSearch from "../page-objects/AdvancedSearchPage";
import Author from "../page-objects/AuthorPage";
import GeneratedTestDataManager from "../page-objects/GeneratedTestDataManager";
import LogIn from "../page-objects/LogInPage";
import SearchBooks from "../page-objects/SearchBooksPage";

export const advancedSearch = new AdvancedSearch(cy);
export const author = new Author(cy);
export const generateTestData = new GeneratedTestDataManager(cy);
export const logIn = new LogIn(cy);
export const searchBooks = new SearchBooks(cy);
