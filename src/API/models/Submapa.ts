export default class SubMapa {
  mapName: string;
  name: string;
  steps: Array<string>;

  constructor(name: string, steps: Array<string>) {
    this.name = name;
    this.steps = steps;
  }
}
