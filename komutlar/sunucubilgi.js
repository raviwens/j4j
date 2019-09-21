
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const emojiler = require("../emojiler.json");
exports.run = (bot, message, params) => {
 let bolge = message.guild.region
 .replace("eu-","🇪🇺 Avrupa (Merkez)")
 .replace("singapore","🇸🇬 Singapur")
 .replace("india", "🇮🇳 Hindistan")
 .replace("us-central","🇺🇸 Amerika (Merkez)")
 .replace("london","🇬🇧 Londra")
 
  const embed = new Discord.RichEmbed()
   .setColor("42bcf5")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
  .addField('Sunucu Sahibi:', message.guild.owner, true)
    .addField('Sunucu ID:', message.guild.id, true)
   .addField('Sunucu Bölgesi:', bolge , true)
   .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
   .addField('Üyeler [' + message.guild.members.size+"]:", `${emojiler.gold1} \`${message.guild.members.filter( member => member.user.bot).size}\` bot \n${emojiler.gold1} \`${message.guild.memberCount}\` üye`, true)
   .addField('Roller:', message.guild.roles.map(role => role.name).join(' - '), true)
   .addField('Kanallar ['+ message.guild.channels.size+"]:", emojiler.gold2 +` \`${message.guild.channels.filter(chan => chan.type === 'voice').size}\` sesli/ \` ${message.guild.channels.filter(chan => chan.type === 'text').size}\` metin / \`${message.guild.channels.filter(chan => chan.type === "category").size}\` kategori`, true)
   .setFooter('Server Guard', message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 2
 };

 exports.help = {
   name: 'sunucubilgi',
   description: '',
   usage: ''
 };