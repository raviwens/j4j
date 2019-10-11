const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
client.shard.broadcastEval('this.users.size').then(i => db.add("shard",i[0]));
  const pingEmbed = new Discord.RichEmbed()
 .setColor(0xabeb34)
.setAuthor(`⚠️ Bug/Hata bildirimi!`)
.addField("🤖 Shard 1", db.fetch("shard")+" Sunucu")
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
