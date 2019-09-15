const emojiler = require("../emojiler.json");
exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`${emojiler.basarisiz} AFK olma sebebini yazmalısin`)
 }});
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("Zaten AFK'sın.")
  }
  else {
    msg.reply(`${emojiler.elmas}`)
     msg.member.setNickname(`[AFK]${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olmanızı sağlar.',
  usage: '!afk <sebep>'
};