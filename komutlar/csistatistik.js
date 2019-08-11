const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let guild = message.guild;
  let server = args.slice(0).join('185.193.165.189');
var query = require('game-server-query');
  query(
    {
        type: 'csgo',
        host: server
    },
    function(state) {
        if(state.error){
      message.channel.send("Server is offline");
    }
        else {
      console.log(state);
    }
      guild.createChannel('Adı : ' + query.name, 'voice');
      guild.createChannel('Map : ' + query.map, 'voice');
      guild.createChannel('Oyuncular : ' + query.players, 'voice');
    }

);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'csistatistik',
  description: '',
  usage: ''
};