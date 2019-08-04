const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
            color: 0xD97634,
          
            title: "",
            description: ` <a:discord:596887201384628238>  [Ping](https://ddiscord.gg/dN5cQ5Z) : **${Math.round(client.ping)}** ms \n :zap: Elimi Çabuk tutuyorum  :zap:`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© Mythia Bot Tüm hakları saklıdır."
            }
          }
        });  
        message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Tüm komutları gösterir.',
  usage: 'ping'
};