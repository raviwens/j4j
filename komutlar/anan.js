///////////////////
//komutlar/afk.js//
///////////////////

const db = require("quick.db")

exports.run = function(client, message, args) {

  var USER = message.author;
  
  db.set(`sys_süre_${USER.id}`, Date.now());
  message.channel.send("Başarıyla sistem moduna girdiniz.")
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'adminbaşlat', 
  description: 'Kullanıcııyı sistem moduna sokar.',
  usage: 'adminbaşlat'
};