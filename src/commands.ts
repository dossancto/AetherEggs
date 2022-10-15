import { Message } from 'discord.js';
import { ComandosDiversos } from "./diversos"
import { getMapa } from "./Database";
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

  use(tokens: Array<string>) {
    const command = tokens.shift();
    const args = tokens;

    console.log(`Comando: ${command}\nArgs: ${args}`);

    const comandoDiverso = ComandosDiversos.find(cmd => cmd.input == command);
    const mapa = getMapa(command);

    if (comandoDiverso) {
      this.message.reply(comandoDiverso.output.call(this));
    }

    else if (mapa) {
      const managePages = new ManagePages(this.message);

      const tipo = convertEE(args[0])

      const bt = new BuildTutorial(mapa, tipo);
      const embedTutorial = bt.buildPage();

      managePages.createMenus(embedTutorial)
    }

    else {
      this.message.channel.send("Comando ou mapa não disponível");
    }
  }
}
