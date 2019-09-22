
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const emojiler = require("../emojiler.json");
exports.run = (bot, message, params) => {
 let bolge = message.guild.region
 .replace("eu-central","🇪🇺 Avrupa (Merkez)")
 .replace("eu-west","🇪🇺 Avrupa (Batı)")
 .replace("singapore","🇸🇬 Singapur")
 .replace("india", "🇮🇳 Hindistan")
 .replace("us-central","🇺🇸 Amerika (Merkez)")
 .replace("eu-west","🇪🇺 Avrupa (Doğu)")
 .replace("brazil","🇧🇷 Brazilya")
 .replace("us-west","🇺🇸 Amerika (Doğu)")
 .replace("hongkong","🇭🇰 Hong Kong")
 .replace("us-south","🇺🇸 Amerika (Güney)")
 .replace("southafrica","🏳 Güney Afrika")
 .replace("eu-east","🇪🇺 Avrupa (Kuzey)")
 .replace("sdyney","🇦🇺 Sidney")
 .replace("russia","🇷🇺 Rusya")
 let uye = `
${emojiler.dnd} **Rahatsız Etmeyin:** ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
${emojiler.bosta} **Boşta:** ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
${emojiler.aktif} **Çevrimiçi:** ${message.guild.members.filter(m=>m.presence.status == 'online').size}
${emojiler.offline} **Çevrimdışı:** ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
${emojiler.kup} **Toplam:** ${message.guild.memberCount}  
`
 let dogrulama = `${message.guild.verificationLevel}`
 .replace("0","**Discord**'dan yasaklanmamış herkes.")
 .replace("1","Hesaplar **E-Posta** ile doğrulanmalıdır")
 .replace("2","Hesaplar **Discord**'a 5 dakikadan fazla kayıtlı olmalıdır.")
 .replace("3","Hesaplar Sunucu'da **10 dakikadan** uzun süre kayıtlı olmalıdır.")
 .replace("4","Hesapların **telefon** onaylı olması gerekmektedir.")
 const embed = new Discord.RichEmbed()
   .setColor("42bcf5")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
  .addField('Sunucu Sahibi:', message.guild.owner, true)
    .addField('Sunucu ID:', message.guild.id, true)
   .addField('Sunucu Bölgesi:', bolge , true)
   .addField('Doğrulama seviyesi:', dogrulama, true)
   .addField('Üyeler [' + message.guild.members.size+"]:", uye, true)
   .addField('Roller:', "<@&" +message.guild.roles.map(role => role.id).join('> - <@&')+ ">", true)
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