const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ping ~ 》 Gerekli kurulum tamamlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Ping ~ 》 ${client.user.tag} olarak giriş sağlandı...`);
  client.user.setStatus("dnd");
        client.user.setActivity(client.ayarlar.oynuyor + " PingWasHere");

console.log(`[PING] Kurulum #${client.shard.id}: (${+client.shard.id+1}/${client.shard.count}) hazır.`);

};