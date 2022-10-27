// TODO: Fazer um teste com todos os mapas, validando se algum campo é undefined

import { getMapByName } from "../src/Database"
import { EETIPOS } from "../src/extras/TiposEE"

class Teste {
  name: string;
  desc: string;
  func: Function;

  constructor(desc: string, func: Function) {
    this.func = func;
    this.name = this.func.name;
    this.desc = desc;
  }

  async run() {
    return await this.func.call(this);
  }

}

async function validAPIresponse(mapName: string = "shadows", tipo = EETIPOS.WONDER_WEAPON) {
  const response = await getMapByName(mapName, tipo) ?? false;

  if (!response) {
    console.error(`Erro ao proucurar "${mapName}"`)
    return response;
  }

  const err = response.some(res => {
    if (!res.mapName == undefined)
      return true;
    if (!res.name == undefined)
      return true;
    if (!res.steps == undefined)
      return true;
  });

  console.log(!err);
  return !err;
}

const testes: Array<Teste> = [
  new Teste("Verifica se o retorno da API está coerente", validAPIresponse),
  new Teste("Verifica se o retorno da API está coerente", validAPIresponse),
  new Teste("Verifica se o retorno da API está coerente", validAPIresponse),
  new Teste("Verifica se o retorno da API está coerente", validAPIresponse),
]

export function runTestes() {
  let atv = true;
  testes.forEach(async t => {
    if (!atv) return;

    const result = await t.run();

    if (!result) {
      console.error(`Teste falhou na função "${t.name}"`)
      console.info("Este teste: ", t.desc)
      atv = false;
    }
    else {
      console.log(`${t.name} -> PASSOU`);
    }
    console.log("\n")
  })
}
