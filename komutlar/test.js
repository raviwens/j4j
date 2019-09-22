
const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MUTE_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri sustur` yetkisine sahip olmanız gerek.")
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("Süre belirt")
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin")
    kullanici.setMute(true, ` Susturan kişi ${message.author.tag}`)
        .then(() =>
            message.channel.send(`${kullanici} adlı kullanıcının mikrofonu kapatıldı`))
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`Mute süresi doldu`)
        message.channel.send(` adlı kişinin banının süresi bittiği için banı açıldı `)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['m-kapat', 'seslidesustur'],
    permLevel: 0
};

exports.help = {
    name: 's-sustur',
    description: 'İstediğiniz kişinin sesli kanaldaki mikrofonunu kapatır.',
    usage: 's-sustur [kullanıcı] [@rol]'
};