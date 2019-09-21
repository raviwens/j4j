
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("42bcf5")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('Sunucu ID:', message.guild.id, true)
   .addField('Sunucu Bölgesi:', message.guild.region, true)
   .addField('Sunucu Sahibi:', message.guild.owner, true)
   .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
   .addField('Üyeler:', `\`${message.guild.members.filter( member => member.user.bot).size}\` bot \n\`${message.guild.memberCount}\` üye`, true)
   .addField('Roller:', message.guild.roles.map(role => role.name).join(' - '), true)
   .addField('Kanallar:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.filter(chan => chan.type === 'text').size} metin`, true)
   .addField('Kanal sayısı:', message.guild.channels.size, true)
   .addField('AFK kanalı:', `${message.guild.afkChannel}`.replace("null","Ayarlı Değil"), true)
   .addField('AFK zaman aşımı:', moment.duration.(message.guild.afkTimeout)., true)
   .addField('Oluşturma tarihi:', message.guild.createdAt, true)
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