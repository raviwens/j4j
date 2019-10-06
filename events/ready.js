const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ping ~ 》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ping ~ 》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setStatus("dnd");
        client.user.setActivity(client.ayarlar.oynuyor + " PingWasHere");
};