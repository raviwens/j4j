const Discord = require('discord.js');
const emojiler = require('../emojiler.json');
exports.run = (client, message, args) => {
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply(`${emojiler.basarisiz} Sunucudan atma sebebini yazmalısın, Kullanım: `+ '`!kick @kisi <sebep>`'+` `);
  if (message.mentions.users.size < 1)  return message.reply(`${emojiler.basarisiz} Kimi sunucudan atacağını yazmalısın.` + 'Kullanım: `!kick @kisi <sebep>`')
  if (!message.guild.member(user).kickable) return message.reply(`${emojiler.basarisiz} Yetkilileri sunucudan atamam.`);
  message.guild.member(user).kick(); return message.channel.send(`${emojiler.onaylı} Başarılı ${user} sunucudan atıldı.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};