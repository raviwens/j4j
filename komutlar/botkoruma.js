const Discord = require('discord.js');
const db = require('quick.db')
const emojiler = require('../emojiler.json');

exports.run = async (bot, message,args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`botkoruma_${message.guild.id}`)
  
  if (args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${emojiler.basarisiz} Bot Koruma Sistemini kapatmak için **bot koruma kanalının** seçili olması lazım. Kullanım: \`!botkoruma #kanal\``);
    db.delete(`botguard_${message.guild.id}`)
   db.delete(`botkoruma_${message.guild.id}`)
   message.channel.send(`${emojiler.onaylı} Bot Koruma Sistemi başarıyla kapatıldı.`);
  
    return
  }
  
if (!logk) return message.channel.send(emojiler.basarisiz + " Doğru bir kanal girmelisiniz, Kullanım `!botkoruma #kanal`");
 

   db.set(`botkoruma_${message.guild.id}`, logk.id)
db.set(`botguard_${message.guild.id}`,'acik')
message.channel.send(`${emojiler.onaylı} Bot Koruma Sistemi başarıyla ${logk} olarak ayarlandı.`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: 'botkoruma',
  description: 'Bot koruma sistemi',
  usage: '!botkoruma #kanal'
};
 