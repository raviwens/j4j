const Discord = require('discord.js');
const db = require('quick.db')
const emojiler = require('../emojiler.json');

exports.run = async (bot, message,args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guard_${message.guild.id}`)
  
  if (args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`!güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`${emojiler.onaylı} Güvenlik başarıyla kapatıldı.`);
  
    return
  }
  
if (!logk) return message.channel.send('Güvenlik kanalını bulamadım  Kullanım `!!güvenlik #kanal`');
 

   db.set(`guard_${message.guild.id}`, logk.id)

message.channel.send(`${emojiler.onaylı} Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlik'],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik',
  description: 'Güvenlik sistemi',
  usage: 'S'
};
 