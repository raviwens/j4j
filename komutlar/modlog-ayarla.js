const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:basarisiz:596887378476400651> | Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)

  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)

  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`<a:basarisiz:596887378476400651> | Lütfen bir kanal giriniz! \nDoğru Kullanım; \`${prefix}modlogayarla <#kanal>\``)

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(`<a:basarili:596886828762791948> | Modlog kanalı başarılı bir şekilde ayarlandı.`)

    } else {
      if(modlogs) {

        const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
        return message.channel.send(`<a:basarisiz:596887378476400651> | Bu sunucuda daha önceden modlog kanalı ayarlanmış. Sıfırlamak için: ${prefix}modlogayarla-sıfırla\nAyarlanan kanal: \`${modlogkanal.name}\``)

      }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log'],
    permLevel: 0
}

exports.help = {
    name: 'modlog-ayarla',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}
