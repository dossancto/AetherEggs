import { EETIPOS, convertToShortName } from "../extras/TiposEE"
import axios from 'axios'
import SubMapa from "./models/Submapa";
import Mapa from "./models/Mapa";

require('dotenv').config();

const API_URL = process.env.API_URL;

export async function getMapByName(mapName: string, tipoee: EETIPOS): Promise<Array<SubMapa>> {
  const tipo = convertToShortName(tipoee);

  const url = `${API_URL}/tutoriais/${mapName}/${tipo}`;

  try {
    const result = await axios.get(url,
      {
        headers: {
          Accept: "applicaiton/json"
        }
      }
    )

    const subMapa: SubMapa[] = result.data;

    return subMapa;
  }
  catch {
    return null;
  }
}

export async function getAllMaps(): Promise<Mapa[]> {
  const url = API_URL + "/allmaps";
  const result = await axios.get(
    url,
    {
      headers: {
        Accept: "applicaiton/json"
      }
    }
  );

  const mapas = result.data;

  return mapas;
}

// TODO: Refazer em forma de API
// export async function getAllMapsName(): Promise<Array<string>> {
//   const mapas: Array<Mapa> = bd.maps;
//   return mapas.map(val => val.name);
// }
