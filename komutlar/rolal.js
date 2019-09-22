
const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
 
message.react('🌹')

const filter = (reaction, user) => {
	return ['🌹'].includes(reaction.emoji.name) && user.id === message.author.id;
};
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {

		const reaction = collected.first();

		if (reaction.emoji.name === '🌹') {
			message.reply('onauli.');
      
		} else {
			message.reply('onaysiz');
		}
	}

  
)}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol',
  description: '',
  usage: ''
};
