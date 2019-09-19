const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
 let herkes = message.guild.roles.find(a => a.name === "@everyone");
if (args[0] === "kilit kapat") {
    
   message.channel.send(`${emojiler.onaylı} ${message.channel} başarıyla açıldı.`);
  
    
  }
  if(args[0] === "kilit aç"){
  message.channel.overwritePermissions(herkes, {
        'SEND_MESSAGES': false,

});
message.channel.send(emojiler.onaylı + ` ${message.channel} başarıyla kitlendi. \n${emojiler.gold2} Kanalı açmak için:\n${emojiler.gold1} \`!kilit aç\``);
  }}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'kanal',
  description: '',
  usage: ''
};
