
const Discord = require('discord.js')
const db = require('quick.db')
const emojiler= require('../emojiler.json')
exports.run = async (client, message, args) => {
if (args[0] === "kapat") {
  let k = db.fetch(`spanel_${message.guild.id}`)
  let k1 = db.fetch(`spanelUye_${message.guild.id}`)
  let k2 = db.fetch(`spanelBot_${message.guild.id}`)
   client.category.get(k).delete()

  client.channels.get(k1).delete()
  client.channels.get(k2).delete()
  
  
 await db.delete(`spanel_${message.guild.id}`)
  await db.delete(`spanelUye_${message.guild.id}`)
  await db.delete(`spanelBot_${message.guild.id}`)
  return message.channel.send(emojiler.gold1 + " Sunucu Analiz paneli silindi.");
}else{
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var sunucupanel = message.guild.createChannel("Sunucu Panel", "category").then(sp => {

db.set(`spanel_${message.guild.id}`,sp.id)
var toplamkişi = message.guild.createChannel(`Toplam Kullanıcı: ${message.guild.members.filter(m => !m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`spanelUye_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var toplambot = message.guild.createChannel(` Bot Sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`spanelBot_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
})

await message.channel.send(`${emojiler.onaylı} Sunucu İstatistik paneli kuruldu.`);
}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 3
};

exports.help = {
name: 'panel-kur',
description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
usage: 'panel-kur'
};