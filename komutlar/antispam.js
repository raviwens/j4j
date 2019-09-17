
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${emojiler.basarisiz} Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`${emojiler.basarisiz} Anti Spam Filtresini açmak için \`!antispam aç\`  Kapatmak istiyorsanız \`!antispam kapat\` yazabilirsiniz.`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`${emojiler.basarisiz} Anti Spam Filtresini açmak için \`!antispam aç\`  Kapatmak istiyorsanız \`!antispam kapat\` yazabilirsiniz.`)

    if (args[0] == 'aç') {
  let durum= await db.fetch(`spam_${message.guild.id}`)
    if (durum) return message.channel.send(`${emojiler.basarisiz} Anti Spam sistemi zaten açık.\n${emojiler.gold1} Anti Spam sistemini kapatmak için:\n${emojiler.gold2} \`!antispam kapat\` yazınız.`)
   
      db.set(`spam_${message.guild.id}`, 'acik')
    let i = await db.fetch(`spam_${message.guild.id}`)
  message.channel.send(`${emojiler.onaylı} Anti Spam Filtresi şuanda aktif.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`spam_${message.guild.id}`)
    if (!üye) return message.channel.send(`${emojiler.basarisiz} Anti Spam filtresi zaten kapalı.\n${emojiler.gold1} Anti Spam sistemini açmak için:\n${emojiler.gold2} \`!antispam aç\` yazınız.`)
    
    
    db.delete(`spam_${message.guild.id}`)
    
    message.channel.send(`${emojiler.onaylı} Anti Spam Filtresi şuanda pasif.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
 name: 'antispam',
 description: 'spam',
 usage: 'spam'
};