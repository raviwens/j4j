const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: İsmini yazacaksın",
    url: "discord sunucusu yazacaksın",
    description: "Özellik yazacaksın.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsorqweqweqweeqwe',
  description: 'sponsorları gösterir.',
  usage: 'sponsorqwewqewqeqwewq'
};
