const bd = require("../bd.json");

export class SubMapa {
  name: string;
  steps: Array<string>;

  constructor(name: string, steps: Array<string>) {
    this.name = name;
    this.steps = steps;
  }
}

export class Mapa {
  name: string;
  easterEgg: Array<SubMapa>;
  wonderWeapon: Array<SubMapa>;
  upgradeWonderWeapon: Array<SubMapa>;
  extras: Array<SubMapa>;

  constructor(name: string, easterEgg: Array<SubMapa>, wonderWeapon: Array<SubMapa>, upgradeWonderWeapon: Array<SubMapa>, extras: Array<SubMapa>) {
    this.name = name;
    this.easterEgg = easterEgg;
    this.wonderWeapon = wonderWeapon;
    this.upgradeWonderWeapon = upgradeWonderWeapon;
    this.extras = extras;
  }
}

export function getMapa(mapName: string): Mapa {
  const mapas: Array<Mapa> = bd.maps;
  const mapa = mapas.findIndex(value => value.name == mapName);

  if (mapa < 0)
    console.log(mapName)


  return mapas[mapa];
}

export function getAllMapsName(): Array<string> {
  const mapas: Array<Mapa> = bd.maps;
  return mapas.map(val => val.name);
}
