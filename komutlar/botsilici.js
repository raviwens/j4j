
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${emojiler.basarisiz} Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`${emojiler.basarisiz} Anti Spam Filtresini açmak için \`!antispam aç\`  Kapatmak istiyorsanız \`!antispam kapat\` yazabilirsiniz.`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`${emojiler.basarisiz} Anti Spam Filtresini açmak için \`!antispam aç\`  Kapatmak istiyorsanız \`!antispam kapat\` yazabilirsiniz.`)

    if (args[0] == 'aç') {
  let durum= await db.fetch(`botsilici_${message.guild.id}`)
    if (durum) return message.channel.send(`${emojiler.basarisiz} Sohbet Temizleyici zaten açık.\n${emojiler.gold1} Sohbet Temizleyicisini kapatmak için:\n${emojiler.gold2} \`!st kapat\` yazınız.`)
   
      db.set(`botsilici_${message.guild.id}`, 'aktof')
    let i = await db.fetch(`botsilici_${message.guild.id}`)
  message.channel.send(`${emojiler.onaylı} Sohbet Temizleyicisi bu kanal için aktif edildi.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`botsilici_${message.guild.id}`)
    if (!üye) return message.channel.send(`${emojiler.basarisiz} Sohbet Temizleyicisi zaten kapalı.\n${emojiler.gold1} Sohbet Temizleyicisini açmak için:\n${emojiler.gold2} \`!st aç\` yazınız.`)
    
    
    db.delete(`botsilici_${message.guild.id}`)
    
    message.channel.send(`${emojiler.onaylı} Sohbet Temizleyicisi kapatıldı.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
 name: 'st',
 description: 'st',
 usage: 'st'
};