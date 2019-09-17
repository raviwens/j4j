const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
const moment = require('moment');
require('moment-duration-format');
exports.run = (client, message, args) => {
       const m= message.channel.send(`${emojiler.bekliyor} Bekleyiniz, botun gecikmesi ölçül`);
  message.channel.send(`${emojiler.gold1} **Tepki Gecikmesi** \`${Date.now() - message.createdTimestap}\`**ms**\n${emojiler.gold1} **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
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
