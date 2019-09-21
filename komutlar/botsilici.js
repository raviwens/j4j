
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
db.fetch(`usohbet_${message.channel.id}`).then(durum => {
if(!durum || durum === 'pasif') durum = "Pasif"
if(!args[0]) return message.channel.send()
})
  if(args[0] === 'aç') {
    db.set(`st_${message.channel.id}`,'aktif')
    message.channel.send(emojiler.onaylı + "Sohbet Temizleyicisi bu kanalda aktif edildi.")
    }
  else if (args[0] === 'kapat') {
    db.set(`st_${message.channel.id}`,'pasif')
    message.channel.send()
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'st',
  description: '',
  usage: ''
};