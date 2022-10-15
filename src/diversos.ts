const ola = () => "Hello World";
const gasosa = () => ({ files: ['img/nathanmaid.jpg'] });
const about = () => "Olá, sou um Bot idealizado por 2 mlk que tinha nada pra fazer. Posso te ajudar a fazer Easter Eggs, sem precisar ver um video!\n'$ae help' para ver os comandos disponiveis.\nNão sei a diferença entre mim e um blog feio";;
const cadeira = () => ({ files: ["img/fmrdown.gif"] });
const driptofen = () => ({ files: ['img/driptofen.jpg'] });
const malvado = () => ({ files: ['https://media.discordapp.net/attachments/993699121804365894/994746956704387093/unknown.png?width=613&height=435'] });
const chad = () => ({ files: ['img/fmrchad.webp'] });
const beta = () => ({ files: ['https://media.discordapp.net/attachments/993699121804365894/994633972271296583/fmrbeta.webp?width=72&height=72'] });
const sus = () => ({ files: ['https://media.discordapp.net/attachments/993699121804365894/994745513519890553/unknown.png?width=91&height=98'] });
const travado = () => ({ files: ['https://media.discordapp.net/attachments/993699121804365894/994745776133656678/unknown.png?width=412&height=309'] });

class Diverso {
  input: string;
  output: Function;

  constructor(input: string, output: Function) {
    this.input = input;
    this.output = output;
  }
}

export const ComandosDiversos = [
  new Diverso("ola", ola),
  new Diverso("ola", ola),
  new Diverso("gasosa", gasosa),
  new Diverso("about", about),
  new Diverso("cadeira", cadeira),
  new Diverso("driptofen", driptofen),
  new Diverso("malvado", malvado),
  new Diverso("chad", chad),
  new Diverso("beta", beta),
  new Diverso("sus", sus),
  new Diverso("travado", travado),
]
