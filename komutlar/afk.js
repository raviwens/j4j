const emojiler = require("../emojiler.json");
const db = require("quick.db");
exports.run = async (client, message, args) => {
   if (!args[0]) return message.channel.send({embed: {
       color: 0x48a9c7,
       description: (`${emojiler.basarisiz} AFK olma sebebini yazmalısınız. Kullanım: ` + "`!afk <sebep>`")
 }});
  let sebep = args.slice(0).join(' ')
  let isim = message.author.username
  
    message.channel.send(`${emojiler.elmas} **${message.author.username}** adlı kullanıcı, \`${sebep}\` nedeniyle AFK oldu.`);
 message.member.setNickname(`[AFK] ` + message.author.username);
await db.set(`afk_${message.author.id}`, 'acik')
await db.set(`afksebep_${message.author.id}`, sebep)
   db.set(`afksure_${message.author.id}`, Date.now());
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