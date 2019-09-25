
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, args) => {
let cat = args[0]
let odaismi = args.slice(0).join(" ");
  let js1 = client.channels.get("626484209162125343");
message.guild.createChannel("☆-"+odaismi, "text").then(ss =>{
let role = message.guild.roles.find(a => a.name === "@everyone");
ss.setParent(js1);
  ss.overwritePermissions(role, {
  MESSAGES_SEND: false,
  VIEW_CHANNEL:false
 });
});
  if(cat === "cat1"){
  
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