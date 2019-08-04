const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Profiliniz:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['profilfotom','fotom','pp'],
 permLevel: 0
};

exports.help = {
 name: 'profilim',
 description: 'profil fotoğrafınızı atar ',
 usage: 'profilim'
};
