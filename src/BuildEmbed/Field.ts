export default class Field {
  name: string;
  value: string;
  inline: boolean;

  constructor(name: string, value: string, inline: boolean = false) {
    this.name = name;
    this.value = value;
    this.inline = inline;
  }

  /**
  * Returns a JSON representation of this class
  *
  */
  getJSON(): { name: string, value: string } {
    return ({
      name: this.name, value: this.value
    })
  }
}
