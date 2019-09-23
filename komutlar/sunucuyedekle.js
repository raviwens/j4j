const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
  const backup = require("discord-backup");
exports.run = async (client, message, args) => {

   if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(":x: | You must be an administrator of this server to request a backup!");
        }
        // Create the backup
        backup.create(message.guild).then((backupID) => {
            // And send informations to the backup owner
            message.author.send("Yedeği kurmak için: !"+backupID+"`!");
        });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucuyedek',
  description: '',
  usage: ''
};
