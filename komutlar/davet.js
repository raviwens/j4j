const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("<a:canyoutalk:599402076031811629> Destek Sunucusu: ", `[TIKLA](https://discord.gg/)`)    
      .addField("<:qweas:601533383733936138> Botu Ekle: ", `[TIKLA](https://discord.gg/)`)  
      .addField("<a:qwe2:601533562356760586> Bot'a Oy Ver: ", `[TIKLA](https://discord.gg/)`) 
      .addField("<a:nyancat_big:601534081636761613> Website: ", `[TIKLA](https://asistanbott.glitch.me/)`) 
  .setFooter(`${message.author.username} tarafından istendi. | © Asistan Bot.  `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu'],
    permLevel: 0
  };

  exports.help = {
    name: 'davet',
    description: 'yardım',
    usage: 'davet'
  };
