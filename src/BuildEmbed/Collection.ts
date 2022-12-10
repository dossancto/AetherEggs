import Book from "./Book";

export default class BookCollection {
  books: Array<Book>;

  constructor(books: Array<Book>) {
    this.books = books;

  }
}
