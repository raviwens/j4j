const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
  
  let role = message.guild.roles.find(a => a.name === "@everyone");
  message.channel.overwritePermissions(role, {
        'SEND_MESSAGES': false,

})
message.channel.send(emojiler.onaylı` ${message.channel} başarıyla kitlendi. \n${emojiler.gold2} Kanalı açmak için:\n${emojiler.gold1} \`!kilit aç\``)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sunucukitle',
  description: '',
  usage: ''
};
