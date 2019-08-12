const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args, params) => {
let m = message;
if(m.guild.channels.get(await db.fetch(`talep_${m.author.id}`))) {
    if (m.content === "evet") {
    m.channel.delete
                m.send("Canlı Destek odanız kapatılıyor...").then(()=>{        
                })}}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kapat",
  description: "Talep kanalını kapatır",
  usage: "kapat"
};