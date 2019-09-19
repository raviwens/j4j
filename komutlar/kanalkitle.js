const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
  if(message.member.hasPermission("ADMINSTOR")) return message.channel.send(`${emojiler.basarisiz} Bu işlemi yapmak için \`ADMINSTOR\` yetkisine sahip olmanız gerekmektedir.`);
 let herkes = message.guild.roles.find(a => a.name === "@everyone");
 if(herkes = 
  message.channel.overwritePermissions(herkes, {
        'SEND_MESSAGES': false,

})
message.channel.send(emojiler.onaylı + ` ${message.channel} başarıyla kitlendi. \n${emojiler.gold2} Kanalı açmak için:\n${emojiler.gold1} \`!kilit aç\``)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kitle',
  description: '',
  usage: ''
};
