import { Client, Message } from 'discord.js';
import Command from "./src/commands";

require('dotenv').config();

const DISCORD_KEY = process.env.DISCORD_KEY;

const client = new Client({
  intents: ["Guilds", "MessageContent", "GuildMessages"],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message: Message) => {
  const command = new Command(message);
  command.run();
});

client.login(DISCORD_KEY);
