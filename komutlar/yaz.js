const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = (client, message, args) => {

  message.channel.send(`${emojiler.gold1} **Tepki Gecikmesi** \`${message.createdTimestamp - message.createdTimestamp}\`**ms**\n${emojiler.gold1} **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: '',
  usage: ''
};
