const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const { sendCommand } = require('./helpers/sendCommand');
dotenv.config();

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES
  ] 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    sendCommand(message);
});

client.login(process.env.DISCORD_TOKEN);
