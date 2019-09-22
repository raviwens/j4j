const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   if(args[0] === "durum"){
     client.user.setActivity('<activity>', { type: 'WATCHING' });

   }
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: '',
  usage: ''
};
