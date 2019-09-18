const Discord = require('discord.js');
const db = require('quick.db')
const emojiler = require('../emojiler.json');

exports.run = async (bot, message,args) => {
  
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`resimlihgbb_${message.guild.id}`)
  
  if (args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${emojiler.basarisiz} Resimli HGBB kapatmak için **Resimli HGBB kanalının** seçili olması lazım. Kullanım: \`!resimli-hgbb #kanal\``);
    
   db.delete(`resimlihgbb_${message.guild.id}`)
   message.channel.send(`${emojiler.onaylı} Yazılı HGBB başarıyla kapatıldı.`);
  
    return
  }
  
if (!logk) return message.channel.send(emojiler.basarisiz + " Doğru bir kanal girmelisiniz, Kullanım `!resimli-hgbb #kanal`");
 

   db.set(`resimlihgbb_${message.guild.id}`, logk.id)
db.set(`m_${message.guild.id}`,"acik")
message.channel.send(`${emojiler.onaylı} Resimli HGBB kanalı ${logk} olarak ayarlandı.`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: 'resimli-hgbb',
  description: '',
  usage: '!resimli-hgbb #kanal'
};
 