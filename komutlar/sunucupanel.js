
const Discord = require('discord.js')
const db = require('quick.db')
const emojiler= require('../emojiler.json')
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${emojiler.basarisiz} Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if(!args[0]) return message.channel.send(emojiler.basarisiz +` Bir eylem belirtmelisiniz. \n${emojiler.gold2} Sunucu İstatistik panelini kurmak için \n${emojiler.gold1}\`!sunucupanel kur\`\n${emojiler.gold2} Sunucu İstatistik panelini temizlemek için\n${emojiler.gold1}\`!sunucupanel sıfırla\` \nyazınız. `);
  if (args[0] === "sıfırla") {
  let k = db.fetch(`spanel_${message.guild.id}`)
  let k1 = db.fetch(`spanelUye_${message.guild.id}`)
  let k2 = db.fetch(`spanelBot_${message.guild.id}`)
 await  client.channels.get(k).delete()

  await client.channels.get(k1).delete()
 await client.channels.get(k2).delete()
  
  
 await db.delete(`spanel_${message.guild.id}`)
  await db.delete(`spanelUye_${message.guild.id}`)
  await db.delete(`spanelBot_${message.guild.id}`)
await db.delete(`spanelDurum_${message.guild.id}`)
 
    return message.channel.send(emojiler.gold1 + " Sunucu İstatistik paneli silindi.");
}if (args[0] ==="kur"){
 let durum = db.fetch(`spanelDurum${message.guild.id}`)
  if(durum === "acik") return message.channel.send(emojiler.basarisiz + `Sunucu İstatistik Paneli zaten kurulu. \n${emojiler.gold2} Sıfırlamak için\n${emojiler.gold1}\`!sunucupanel sıfırla\`\n yazınız.`);
var sunucupanel = message.guild.createChannel("Sunucu Panel", "category").then(sp => {
db.set(`spanel_${message.guild.id}`,sp.id)
db.set(`spanelDurum_${message.guild.id}`, 'acik')
 
  client.channels.get(sp.id).setPosition(0)
 
  var toplamkişi = message.guild.createChannel(`Toplam Kullanıcı: ${message.guild.members.filter(m => !m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`spanelUye_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@everyone");
    ss.overwritePermissions(role, {
  CONNECT: false,
})
})
var toplambot = message.guild.createChannel(` Bot Sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`spanelBot_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@everyone");
    ss.overwritePermissions(role, {
  CONNECT: false,
})

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
name: 'sunucupanel',
description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
usage: 'sunucupanel'
};