const Discord = require("discord.js");
const ms = require("ms");
const emojiler= require('../emojiler.json');
module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(`${emojiler.basarisiz} Bu komudu kullanabilmek için ` +'`Kick Members`'+ ` yetkisine Sahip olmalısın.`)
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`${emojiler.basarisiz} Böyle birisini bulamıyorum. Kullanım: `+ '`!mute @kisi`')
  let muterole = message.guild.roles.find(`name`, "Muted");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    await (user.addRole(muterole.id));
  message.channel.send(`${emojiler.onaylı} Başarılı, ${user} susturuldu.`);

}


exports.conf = {
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}
