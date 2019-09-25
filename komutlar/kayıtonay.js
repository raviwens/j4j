
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
message.delete(2000);
  let uye =  db.fetch(`kod_${message.author.id}`)
  let uyes =  db.has(`kod_${message.author.id}`)
  if(uyes) return message.channel.send("Zaten kayıtlısın!").then(msg => msg.delete(6000));
  if(args[0] !== uye) return message.reply("Hata! Doğru kod girmelisin.").then(msg => msg.delete(10000))
  else {
  message.delete()
  var silrol = message.guild.roles.get('626484784637673472');   
      
  var alrol= message.guild.roles.get('626455739497447441');   
      
  message.member.removeRole(silrol);   
      
  message.member.addRole(alrol);  
    
   message.channel.send("Başarıyla kayıt oldun.").then(msg => msg.delete(10000))
    
  }

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