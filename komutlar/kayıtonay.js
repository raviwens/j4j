
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

exports.run = (client, message, args) => {
  let uye =  db.fetch(`kod_${message.author.id}`)
  if(!uye) return;
  db.fetch(`kod_${message.author.id}`).then(kod => {
  if(args[0] !== kod) return message.reply("Hata! Doğru kod girmelisin.").then(msg => msg.delete(10000))
  else {
  message.delete()
  var alrol = message.guild.roles.get('626484784637673472');   
      
  var silrol = message.guild.roles.get('626455739497447441');   
      
  message.member.removeRole(silrol);   
      
  message.member.addRole(alrol);  
    
   message.channel.send("Başarıyla kayıt oldun.").then(msg => msg.delete(10000))
    
  }

})}

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