
const Discord = require('discord.js')
const db = require('quick.db')
const emojiler= require('../emojiler.json')
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var sunucupanel = message.guild.createChannel("Sunucu Panel", "category").then(sp => {



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
message.channel.send(`${emojiler.onaylı} Sunucu İstatistik paneli kuruldu.`);
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