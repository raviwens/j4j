
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
message.delete(2000);
  message.delete()
 if (message.channel.id==="626482511710781453"){
  let alrol = message.guild.roles.get("626484310169354251");
   message.member.addRole(alrol);  
    
   message.reply("JS rolünü aldın.").then(msg => msg.delete(10000))
 }else{
  message.channel.send("Bu kodu yanlızca **bot komut** kanalında kullanabilirsin.");
 }
  }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};