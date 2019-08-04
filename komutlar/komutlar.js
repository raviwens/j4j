const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mythia Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:paperclip:596892641149321216> | Mythia Bot - Komutlar <a:discord:596887201384628238> `, `:white_small_square: | **m!**:Prefiximiz  \n:white_small_square: | **m!eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **m!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **m!kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **m!müzik**: Müzik kısmı şu an bakımdadır.\n:white_small_square: | **m!desteksunucu**: Yardım ve destek için bize ulaşın.`)
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=597082669817266186&scope=bot&permissions=2080898303) `+"**|**"+` [Oy ver(YAKINDA)](https://discord.gg/6ScduPs) ` +"**|**"+` [Mythia Bot Destek Sunucusu](https://discord.gg/6ScduPs)`) 

  .setFooter(`${message.author.username} tarafından istendi. | © Mythia Bot Tüm hakları saklıdır.  `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command','y', 'h','k', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'komutlar',
    description: 'yardım',
    usage: 'yardım'
  };
