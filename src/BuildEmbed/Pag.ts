import { EETIPOS } from "../extras/TiposEE"
import Field from "./Field";

export default class Pag {
  mapName: string;
  tipoEE: EETIPOS;
  filds: Array<Field>;
  imgUrl: string;

  tutorName: string;

  constructor(mapName: string = "Default", tipoEE: EETIPOS = 0, filds: Array<Field>, tutorName: string, imgUrl: string = "https://discord.com/channels/889302729023959090/914664584688832533/1027267133253632040") {
    this.mapName = mapName;
    this.tipoEE = tipoEE;
    this.filds = filds;
    this.tutorName = tutorName;
    this.imgUrl = imgUrl;
  }

  getEmbed(numPage: number = 1, maxPages: number = 1) {
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
        text: `Página ${(numPage + 1).toString()}/${maxPages}`,
      },
    };
  }
}
