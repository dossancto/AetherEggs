import Pag from "./Pag";

export default class Book {
  name: string;
  pages: Array<Pag>;

  constructor(name: string, pages: Array<Pag>) {
    this.name = name;
    this.pages = pages;
  }
}
