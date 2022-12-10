import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Message, SelectMenuBuilder } from "discord.js"
import Pagination from "./Pagination"
import BookCollection from "./BuildEmbed/Collection";

class Option {
  label: string;
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }

  getFormated() {
    return ({
      label: this.label,
      value: this.value
    })
  }
}

export default class ManagePages {
  message: Message;
  menu: ActionRowBuilder<SelectMenuBuilder>;
  buttons: ActionRowBuilder<ButtonBuilder>;

  constructor(message: Message) {
    this.message = message;
  }

  convertToOption(collection: BookCollection) {
    let option: Array<any> = [];

    collection.books.forEach((val, i) => {
      if (true) {
        option.push(
          new Option(val.name, i.toString()).getFormated()
        );
      }
    });

    return option;
  }

  createMenus(tutorials: BookCollection) {
    const opt: any = this.convertToOption(tutorials);
    this.menu = new ActionRowBuilder<SelectMenuBuilder>()
      .addComponents(
        new SelectMenuBuilder()
          .setCustomId("tutorial")
          .setPlaceholder("Selecione um tutorial")
          .addOptions(opt)
      );

    this.buttons = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('prev')
          .setLabel("ANTERIOR")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('next')
          .setLabel("PROXIMO")
          .setStyle(ButtonStyle.Primary)
      )

    const pagination = new Pagination(tutorials.books[0].pages);

    this.message.channel
      .send({ embeds: [pagination.getPag()], components: [this.menu, this.buttons] })
      .then((drop) => {
        const filter = interaction => interaction.isSelectMenu();
        const btnFilter = interaction => interaction.customId == "next" || interaction.customId == "prev";

        const menuCollector = drop.createMessageComponentCollector({
          filter,
          time: 60000 * 30
        })
        const btnCollector = drop.createMessageComponentCollector({ filter: btnFilter });

        menuCollector.on('collect', async (collected) => {
          const key = parseInt(collected.values[0]);
          collected.deferUpdate();
          pagination.set(tutorials.books[key].pages);
          drop.edit({ embeds: [pagination.getPag()] })
        })

        btnCollector.on('collect', async collected => {
          const key = collected.customId;
          try {
            await collected.deferUpdate();
          }
          catch (e) {
            console.log(e)
          }

          if (key == "next") {
            pagination.nextPage()
          }

          else if (key == "prev") {
            pagination.previousPage()
          }

          await drop.edit({ embeds: [pagination.getPag()] })
        })

        menuCollector.on('end', () => {
          drop.delete();
        })
      });
  }
}
