const Discord = require('discord.js');
const db = require('quick.db')
const emojiler = require('../emojiler.json');

exports.run = async (bot, message,args) => {
  
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`yazilihgbb_${message.guild.id}`)
  if(args[0] === "mesaj"){
    let mesaj = args.slice(1).join(' ')
    db.set(`mesaj_${message.guild.id}`, mesaj)
    message.channel.send("Yazılı HGBB mesajı`"+ mesaj + "olarak ayarlandı.");
  }
  if (args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`${emojiler.basarisiz} Yazılı HGBB kapatmak için **Yazılı HGBB kanalının** seçili olması lazım. Kullanım: \`!yazılı-hgbb #kanal\``);
    
   db.delete(`yazilihgbb_${message.guild.id}`)
   message.channel.send(`${emojiler.onaylı} Yazılı HGBB başarıyla kapatıldı.`);
  
    return
  }
  
if (!logk) return message.channel.send(emojiler.basarisiz + " Doğru bir kanal girmelisiniz, Kullanım `!yazılı-hgbb #kanal`");
 

   db.set(`yazilihgbb_${message.guild.id}`, logk.id)
db.set(`m_${message.guild.id}`,"acik")
message.channel.send(`${emojiler.onaylı} Yazılı HGBB kanalı ${logk} olarak ayarlandı.`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: 'yazılı-hgbb',
  description: '',
  usage: '!yazılı-hgbb #kanal'
};
 