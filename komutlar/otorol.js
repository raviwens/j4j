
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
const emojiler = require('../emojiler.json');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')

  
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let yeniRol;
  let ikinciRol;
  if (!rol) return message.channel.send(emojiler.basarisiz + ' Yeni kişilere vereceğim rolü etiketlemelisin. Kullanım: `!otorol ayarla @Rol #kanal`')
  else yeniRol = message.mentions.roles.first().id
 
      let isim = message.mentions.roles.first().name  
  let kanal = message.mentions.channels.first();
  if (!kanal) return message.channel.send(emojiler.basarisiz + ' Bilgilendirme mesajlarını atacağım yeri etiketlemelisin. Kullanım: `!otorol ayarla @Rol #kanal`')
    db.set(`otorolisim_${message.guild.id}`, isim)
  let i = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
  let otorol = await db.set(`otorol_${message.guild.id}`, yeniRol)
  if (!message.guild.roles.get(yeniRol)) return message.channel.send(emojiler.basarisiz+" Etiketlediğin rolü bulamadım. Rolün etiketlenebilir olduğundan emin olmalısın.")
    message.channel.send(`${emojiler.onaylı} Başarılı, gerekli ayarlamalar yapıldı.\n${emojiler.gold2} Yeni kişilere vereceğim rol \`${isim}\` olarak ayarlandı.\n ${emojiler.gold2} Bilgilendirme kanalı <#${i}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`autoRole_${message.guild.id}`)

    message.channel.send(`${emojiler.onaylı} Otorol başarıyla kapatıldı.`)
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['oto-rol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}