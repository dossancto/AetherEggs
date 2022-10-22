import { Message } from 'discord.js';
import { ComandosDiversos } from "./diversos"
import { getMapByName, getAllMaps } from "./Database";
import { BuildTutorial } from "./CreateTutorials";
import ManagePages from './ManagePages';
import { convertEE } from "./extras/TiposEE"

export default class Command {
  prefix: string = "$ae";
  message: Message;

  constructor(message: Message) {
    this.message = message;
  }

  run() {
    if (this.message.author.bot)
      return;

    const cmd = this.message.content;

    const tokens = cmd.split(" ");

    if (tokens.shift() != this.prefix)
      return;

    this.use(tokens);
  }

  async use(tokens: Array<string>) {
    const command = tokens.shift();
    const args = tokens;

    console.log(`Comando: ${command}\nArgs: ${args}`);

    const comandoDiverso = ComandosDiversos.find(cmd => cmd.input == command);

    const tipo = convertEE(args[0])

    const mapa = await getMapByName(command, tipo) ?? false

    if (comandoDiverso) {
      this.message.reply(comandoDiverso.output.call(this));
      return;
    }

    if (mapa) {
      const managePages = new ManagePages(this.message);

      const bt = new BuildTutorial(mapa);
      const embedTutorial = bt.buildPage();

      managePages.createMenus(embedTutorial)
    }

    else {
      this.message.channel.send("Comando ou mapa não disponível");
    }
  }
}
