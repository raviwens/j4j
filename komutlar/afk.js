const emojiler = require("../emojiler.json");
const db = require("quick.db");
exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: 0x48a9c7,
       description: (`${emojiler.basarisiz} AFK olma sebebini yazmalısınız. Kullanım: ` + "`!afk <sebep>`")
 }});
  let sebep = args.slice(0).join(' ')
  let isim = msg.author.username
  

    msg.reply(`${emojiler.elmas} \`${sebep}\` nedeniyle AFK oldunuz.`)
 msg.member.setNickname(`[AFK]${msg.author.username}`);
  

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