const emojiler = require("../emojiler.json");
const db = require("quick.db");
exports.run = async (client, message, args) => {
   if (!args[0]) return message.channel.send({embed: {
       color: 0x48a9c7,
       description: (`${emojiler.basarisiz} AFK olma sebebini yazmalısınız. Kullanım: ` + "`!afk <sebep>`")
 }});
  let sebep = args.slice(0).join(' ')
  let isim = message.author.username
  

    message.reply(`${emojiler.elmas} \`${sebep}\` nedeniyle AFK oldunuz.`)
 message.member.setNickname(`[AFK] ` + message.author.username);
  db.set(`afk_${message.author.id}`, sebep)

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