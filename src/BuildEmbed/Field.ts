export default class Field {
  name: string;
  value: string;
  inline: boolean;

  constructor(name: string, value: string, inline: boolean = false) {
    this.name = name;
    this.value = value;
    this.inline = inline;
  }
}
