import { convertEE } from "../extras/TiposEE"
import { SubMapa } from "../Database";
import Field from "./Field" 
import Pag from "./Pag";
import Book from "./Book";
import BookCollection from "./Collection";

export class BuildTutorial {
  tutorial: Array<SubMapa>;

  constructor(tutorial: Array<SubMapa>) {
    this.tutorial = tutorial;
  }

  buildPage(): BookCollection {
    let len = 0;
    let books: Array<Book> = [];

    this.tutorial.forEach(step => {
      let pags: Array<Pag> = [];
      let fields: Array<Field> = [];
      let id = 0;
      const pacos: Array<string> = step.steps;

      pacos.forEach(t => {

        if (len > 1800 && !t.startsWith("$file:")) {
          pags.push(new Pag(this.tutorial[0].mapName, convertEE("ww"), fields, step.name));
          fields = [];
          len = 0;
        }

        if (t.startsWith("$file:")) {
          const img = t.replace("$file:", "");
          pags.push(new Pag(this.tutorial[0].mapName, convertEE("ww"), fields, step.name, img));
          fields = [];
          len = 0;
        }
        else {
          id++;
          fields.push(new Field(id.toString(), t));
          len += t.length;
        }
      })
      if (fields) {
        pags.push(new Pag(this.tutorial[0].mapName, convertEE("ww"), fields, step.name, null));
      }
      books.push(new Book(step.name, pags));
    })

    return new BookCollection(books);
  }
}
