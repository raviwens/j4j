const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');
const emojiler = require("../emojiler.json")
const ayarlar = require("../ayarlar.json")
exports.run = async (bot, message, args) => {
  
  const db = require('quick.db');
  
  var m = await message.channel.send(`${emojiler.bekliyor} Ölçüm yapılıyor, lütfen bekleyiniz...`)
  var sonuc = await message.channel.send(emojiler.gold2 + " Veriler alındı...").then(msg => msg.delete(3000))
 
        const duration = moment.duration(bot.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      setTimeout(() => {
        const s = new Discord.RichEmbed()
        .setColor("0x00d2ff")
        .setAuthor(`${bot.user.username}  İstatistikler`, bot.user.avatarURL)
        .addField('Gecikme Durumları', "**Tepki Gecikmesi `{ping1}`ms** \n**Bot Gecikmesi `{ping2}`ms**".replace("{ping1}", new Date().getTime() -3000- message.createdTimestamp).replace("{ping2}", Math.round(bot.ping)), true)
        .addField('Çalışma süresi', `${duration}`, true)
        .addField('Genel veriler', stripIndents`
        **Kullanıcı Sayısı:**  ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${bot.guilds.size.toLocaleString()}
        **Kanal Sayısı:** ${bot.channels.size.toLocaleString()}
        `, true)
        .addField('Versiyonlar', stripIndents`
        **Bot sürümü** v${ayarlar.versiyon}
        **Discord.JS sürümü** v${Discord.version}
        **NodeJS sürümü** ${process.version}
        `, true)
        .addField('Kullanılan bellek boyutu', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        return m.edit(s)
        message.react('622809600109838346')
        }, 3000)
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i'],
    permLevel: 0
};
module.exports.help = {
  name: 'istatistik',
  description: 'İstatistik',
  usage: '!i'
};
