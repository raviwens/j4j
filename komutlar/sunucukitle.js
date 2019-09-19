const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
exports.run = async (client, message, args) => {
  let yazıkanalları = message.guild.channels.filter(c => c.type == 'text').array();
 let role = message.guild.roles.find(a => a.name === "@everyone");
  
 yazıkanalları.overwritePermissions(role, {
  SEND_MESSAGES: false,
  
});
message.channel.send(emojiler.onaylı`Sunucu başarıyla kitlendi. \n${emojiler.gold2} Sunucuyu açmak için:\n${emojiler.gold1} \`!sunucuyuaç\``)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'sunucukitle',
  description: '',
  usage: ''
};
