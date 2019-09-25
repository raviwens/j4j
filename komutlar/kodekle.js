
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, args) => {
let cat = args[0]
let odaismi =
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};