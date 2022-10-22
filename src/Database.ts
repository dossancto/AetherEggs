const bd = require("../bd.json");
import { EETIPOS, convertToShortName } from "./extras/TiposEE"
import axios from 'axios'

export class SubMapa {
  mapName: string;
  name: string;
  steps: Array<string>;

  constructor(name: string, steps: Array<string>) {
    this.name = name;
    this.steps = steps;
  }
}

export class Mapa {
  id: string;
  name: string;
  ee: Array<SubMapa>;
  ww: Array<SubMapa>;
  uww: Array<SubMapa>;
  extras: Array<SubMapa>;

  constructor(name: string, easterEgg: Array<SubMapa>, wonderWeapon: Array<SubMapa>, upgradeWonderWeapon: Array<SubMapa>, extras: Array<SubMapa>) {
    this.name = name;
    this.ee = easterEgg;
    this.ww = wonderWeapon;
    this.uww = upgradeWonderWeapon;
    this.extras = extras;
  }
}

export async function getMapByName(mapName: string, tipoee: EETIPOS): Promise<Array<SubMapa>> {
  const tipo = convertToShortName(tipoee);

  const url = `http://localhost:9000/tutoriais/${mapName}/${tipo}`;

  try {
    const result = await axios.get(url,
      {
        headers: {
          Accept: "applicaiton/json"
        }
      }
    )

    const subMapa: Array<SubMapa> = result.data;

    return subMapa;
  }
  catch {
    return null;
  }
}

export async function getAllMaps(): Promise<Mapa[]> {
  const result = await axios.get(
    'http://localhost:9000/allmaps',
    {
      headers: {
        Accept: "applicaiton/json"
      }
    }
  );

  const mapas = result.data;

  return mapas;
}

export function getAllMapsName(): Array<string> {
  const mapas: Array<Mapa> = bd.maps;
  return mapas.map(val => val.name);
}
