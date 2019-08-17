
const Discord = require('discord.js');
var query = require('game-server-query');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Ne çekilişi olucak onuda yazman lazım.');
   
  const embed = new Discord.RichEmbed()
        .setColor("#36393F")
        .addField('Ödül', `${mesaj}`)
        .addField('Kazanan:', `${message.guild.members.random().displayName}`)
   query(
    {
        type: 'csgo',
        host: 'csgo.hazeljb.com'
    },   function(state) {
    
        if(state.error){
         
        }
        else {
          console.log('tszt');
          message.send(embed);
  }
    }
);

  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'çekilişyap',
    description: 'çekilişyap.',
    usage: 'çekilişyap'
};