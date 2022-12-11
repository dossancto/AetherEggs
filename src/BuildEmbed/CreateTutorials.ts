import { convertEE } from "../extras/TiposEE"
import Field from "./Field"
import Pag from "./Pag";
import Book from "./Book";
import BookCollection from "./Collection";
import SubMapa from "../API/models/Submapa";

/**
  * Converts a tutorial to a collection of a embed.
 *
 */

export function buildBookCollection(tutorial: SubMapa[]): BookCollection {
  let len = 0;
  let books: Array<Book> = [];

  const imgPrefix = "$file:";

  tutorial.forEach(step => {
    let pags: Array<Pag> = [];
    let fields: Array<Field> = [];
    let id = 0;
    const pacos: Array<string> = step.steps;

    pacos.forEach(t => {
      const isAimage = t.startsWith(imgPrefix)

      // Splits the embed into diferent pages
      if (len > 1800 || isAimage) {
        const img = t.replace(imgPrefix, "");
        pags.push(new Pag(tutorial[0].mapName, convertEE("ww"), fields, step.name, isAimage ? img : ""));
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
      pags.push(new Pag(tutorial[0].mapName, convertEE("ww"), fields, step.name, null));
    }
    books.push(new Book(step.name, pags));
  })

  return new BookCollection(books);
}
