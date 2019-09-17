const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send('Ping is being appreciated... :bar_chart:');
    olcum.edit( `${emojiler.gold1} **Tepki Gecikmesi** \`Math.round((olcum.createdTimestamp - olcum.createdTimestamp) - client.ping)}\`**ms**\n${emojiler.gold1} **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);

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
