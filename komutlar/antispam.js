
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`${emojiler.basarisiz} Anti Spam Filtresini Ayarlamak İçin \`!antispam aç\` | Kapatmak İstiyorsanız \`!antispam kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`${emojiler. Anti Spam Filtresini Ayarlamak İçin \`!antispam aç\` | Kapatmak İstiyorsanız \`!antispam kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`spam_${message.guild.id}`, 'acik')
    let i = await db.fetch(`spam_${message.guild.id}`)
  message.channel.send(`Anti Spam Filtresi başarıyla ayarlandı.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`spam_${message.guild.id}`)
    if (!üye) return message.channel.send(`Spam filtresini açtığına emin misin?.`)
    
    
    db.delete(`spam_${message.guild.id}`)
    
    message.channel.send(`Anti-Spam Filtresi kapatıldı.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
 name: 'antispam',
 description: 'spam',
 usage: 'spam'
};