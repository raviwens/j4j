const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args, params) => {
    var request = require('request');
var mcIP = '123.123.123.123'; // Your MC server IP or hostname address
var mcPort = 25565; // Your MC server port (25565 is the default)
    var url = "http://mcapi.us/server/status?ip=" + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            body = JSON.parse(body);
            var status = `*Minecraft sunucusu şu anda çevrimdışı*`;
            if(body.online) {
                status = `**Minecraft** sunucusu **aktif**  -  `;
                if(body.players.now) {
                    status += '**' + body.players.now + '** adet oyuncu şuan sunucuda!';
                } else {
                    status += '*Kimse sunucuda değil*';
                }
            }
            message.reply(status);
        });
  }
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mcistatistik",
  description: "MC İSTATİSTİK",
  usage: "mcistatistik"
};