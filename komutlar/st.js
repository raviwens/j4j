
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
let a = db.fetch(`st_${message.channel.id}`)
if(!a || a === 'pasif') a = "Pasif"
if(!args[0]) return message.channel.send(emojiler.basarisiz + `Eylem belirtmelisiniz.\n${emojiler.gold2} Kullanım:\n${emojiler.gold1} \`!st aç\` veya \`!st kapat\` yazınız.`)

  if(args[0] === 'aç') {
    db.set(`st_${message.channel.id}`,'aktif')
    message.channel.send(emojiler.onaylı + " Sohbet Temizleyicisi bu kanalda aktif edildi.")
    }
  else if (args[0] === 'kapat') {
    db.set(`st_${message.channel.id}`,'pasif')
    message.channel.send(emojiler.onaylı +" Sohbet Temizleyicisi bu kanalda kapatıldı")
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: 'st',
  description: 'st',
  usage: 'st'
};