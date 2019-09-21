
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const emojiler = require('../emojiler.json');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Taga Rol ayarlmak için `Rolleri Yönet` yetkisine sahip olman gerek.')

    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let yeniRol;
  let ikinciRol;
  if (!rol) return message.channel.send(emojiler.basarisiz +'Tagı alanlara vereceğim rolü etiketlemelisin. Kullanım: `!tagarol ayarla @Rol #kanal`')
  else yeniRol = message.mentions.roles.first().id
 
  let isim = message.mentions.roles.first().name
      let kanal = message.mentions.channels.first();
  if (!kanal) return message.channel.send(emojiler.basarisiz + ' Bilgilendirme mesajlarını atacağım yeri etiketlemelisin. Kullanım: `!tagarol ayarla @Rol #kanal`')
  let i = await  db.set(`tagaKanal_${message.guild.id}`, message.mentions.channels.first().id)
  let otorol = await db.set(`tagaRol_${message.guild.id}`, yeniRol)
  if (!message.guild.roles.get(yeniRol)) return message.channel.send(emojiler.basarisiz+" Etiketlediğin rolü bulamadım. Rolün etiketlenebilir olduğundan emin olmalısın.")
    message.channel.send(`${emojiler.onaylı} Başarılı, gerekli ayarlamalar yapıldı.\n${emojiler.gold2} Tag Alanlara vereceğim rol \`${isim}\` olarak ayarlandı.\n ${emojiler.gold2} Bilgilendirme kanalı <#${i}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`tagaTag_${message.guild.id}`)
        db.delete(`tagaKanal_${message.guild.id}`)
    db.delete(`tagaRol_${message.guild.id}`)

    message.channel.send(`${emojiler.onaylı} Taga Rol başarıyla kapatıldı.`)
  }
  if(args[0] == "tag"){
      db.set(`tagaTag_${message.guild.id}`, args[1])
  message.channel.send(emojiler.onaylı + `${args[1]} Adlı tagı alanlara gerekli rolü vereceğim.`);
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'tagarol',
    description: '',
    usage: 'tagarol <@rol>'
}