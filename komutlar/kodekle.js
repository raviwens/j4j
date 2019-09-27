
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, args) => {
    let cat = args[0]
    let odaismi = args.slice(1).join(" ");
    if (!args[0]) return message.channel.send("Doğru kullanım: `p-kodekle cat1 <komut-ismi>`");
    let coder = message.guild.roles.find('name', 'Coder');
    let jsrolu = message.guild.roles.find('name', 'JS');
  
    if (message.member.roles.some(Rol => Rol.id === "626424959916441601")) {


        let js1 = client.channels.get("626484209162125343");
        if (cat === "cat1") {
            message.guild.createChannel("☆-" + odaismi, "text").then(ss => {
                message.channel.send("Yeni kod odası açıldı: " + ss);
                ss.setParent(js1);
                ss.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });
                ss.overwritePermissions(coder, {
                    SEND_MESSAGES: true,
                     VIEW_CHANNEL: true
                });
           ss.overwritePermissions(jsrolu, {
                    SEND_MESSAGES: false,
                     VIEW_CHANNEL: true
                });
            });
        }
    } else {
        message.channel.send("Bu kodu yanlızca ***Coder*** ekibi kullanabilir.");

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kodekle',
    description: '',
    usage: ''
};