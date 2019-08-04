const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:basarisiz:596887378476400651> | Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)

  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)

  if(!modlogs) {
    return message.channel.send(`<a:basarisiz:596887378476400651> | Bu sunucuda daha önceden modlog kanalı ayarlanmamış. Ayarlamak için: \`${prefix}modlog-ayarla <#kanal>\``)
  } else {
    if(modlogs) {
      db.delete(`modlogkanaly_${message.guild.id}`)
      message.channel.send(`<a:basarili:596886828762791948> | Modlog kanalı başarılı bir sıfırlandı!`)
    }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rol-ver'],
    permLevel: 0
}

exports.help = {
    name: 'modlog-sıfırla',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}
