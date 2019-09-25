
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, args) => {
let cat = args[0]
let odaismi = args.slice(1).join(" ");

  let js1 = client.channels.get("626484209162125343");
  if(cat === "cat1"){
  
message.guild.createChannel("☆-"+odaismi, "text").then(ss => {
  message.channel.send("Yeni kod odası açıldı: "+ss);
let role = message.guild.roles.find(a => a.name === "@everyone");
 ss.setParent(js1);
  ss.overwritePermissions(role, {
  SEND_MESSAGES: false,
  VIEW_CHANNEL:false
 });
});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodekle',
  description: '',
  usage: ''
};