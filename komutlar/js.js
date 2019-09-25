
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
message.delete(2000);
  message.delete()
  let alrol = message.guild.roles.get("")
  message.member.addRole(alrol);  
    
   message.channel.send("Başarıyla kayıt oldun.").then(msg => msg.delete(10000))
    
  }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtonay',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};