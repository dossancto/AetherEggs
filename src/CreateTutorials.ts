import { EETIPOS, convertToName } from "./extras/TiposEE"
import { Mapa, SubMapa } from "./Database";

export class Fild {
  name: string;
  value: string;
  inline: boolean;

  constructor(name: string, value: string, inline: boolean = false) {
    this.name = name;
    this.value = value;
    this.inline = inline;
  }
}

export class Pag {
  mapName: string;
  tipoEE: EETIPOS;
  filds: Array<Fild>;
  imgUrl: string;

  tutorName: string;

  constructor(mapName: string = "Default", tipoEE: EETIPOS = 0, filds: Array<Fild>, tutorName: string, imgUrl: string = "https://discord.com/channels/889302729023959090/914664584688832533/1027267133253632040") {
    this.mapName = mapName;
    this.tipoEE = tipoEE;
    this.filds = filds;
    this.tutorName = tutorName;
    this.imgUrl = imgUrl;
  }

  getEmbed() {
    const convedtedField = this.filds.map(f => (
      { name: f.name, value: f.value }
    ));
    return {
      color: 0x0099ff,
      title: this.mapName.toUpperCase(),
      author: {
        name: 'Aether Eggs',
        url: 'https://discord.js.org',
      },
      description: this.tutorName.toUpperCase(),
      fields: convedtedField,
      image: {
        url: this.imgUrl,
      },
      timestamp: new Date().toISOString(),
      footer: {
        text: 'Some footer text here',
      },
    };
  }
}

export class Book {
  name: string;
  pages: Array<Pag>;

  constructor(name: string, pages: Array<Pag>) {
    this.name = name;
    this.pages = pages;
  }
}

export class Collection {
  books: Array<Book>;

  constructor(books: Array<Book>) {
    this.books = books;

  }
}

export class BuildTutorial {

  map: Mapa;
  ee: EETIPOS;
  tutorial: Array<SubMapa>;

  constructor(map: Mapa, ee: EETIPOS) {
    this.map = map;
    this.ee = ee;

    console.log(ee);

    switch (ee) {
      case EETIPOS.EASTER_EGG:
        this.tutorial = map.easterEgg;
        break;
      case EETIPOS.WONDER_WEAPON:
        this.tutorial = map.wonderWeapon;
        break;
      case EETIPOS.UPGRADE_WONDER_WEAPON:
        this.tutorial = map.upgradeWonderWeapon;
        break;
      case EETIPOS.EXTRAS:
        this.tutorial = map.extras;
        break;
      default:
        this.tutorial = map.easterEgg;
        break;
    }

  }

  buildPage(): Collection {
    let len = 0;
    let books: Array<Book> = [];

    this.tutorial.forEach(step => {
      let pags: Array<Pag> = [];
      let fields: Array<Fild> = [];
      let id = 0;
      const pacos: Array<string> = step.steps;

      pacos.forEach(t => {

        if(len > 1800 && !t.startsWith("$file:")){
          pags.push(new Pag(this.map.name, this.ee, fields, step.name));
          fields = [];
          len = 0;
        }

        if (t.startsWith("$file:")) {
          const img = t.replace("$file:", "");
          pags.push(new Pag(this.map.name, this.ee, fields, step.name, img));
          fields = [];
          len = 0;
        }
        else {
          id++;
          fields.push(new Fild(id.toString(), t));
          len += t.length;
        }
      })
      if (fields) {
        pags.push(new Pag(this.map.name, this.ee, fields, step.name));
      }
      books.push(new Book(step.name, pags));
    })

    return new Collection(books);
  }
}