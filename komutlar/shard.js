const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
let üye = client.shard.broadcastEval('this.users.size').then(i => i[0]
 );
const pingEmbed = new Discord.RichEmbed()
 .setColor(0xabeb34)
.setAuthor(`Shard Raporu`)
.addField("🤖 Shard 1",  üye+" üye")
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)
message.channel.send(pingEmbed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shard',
  description: 'Ping was here',
  usage: ''
};
