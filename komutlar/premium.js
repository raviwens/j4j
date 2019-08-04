const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:cedenme:601271998026350592> Premium - Komutlar  <a:cedenme:601271998026350592>`, `<a:krmzkartal:601273852676276235> | **Renkli Rol**: Sadece **Premium** kullanıcılara özeldir.**Parasızdır**,kullanmak için sahibimle iletişime geçiniz. **Elwasy#3071**\n<a:krmzkartal:601273852676276235> | **Sipariş**: Sadece **Premium** kullanıcılara özeldir.**Parasızdır**,kullanmak için sahibimle iletişime geçiniz. **Elwasy#3071**\n<a:krmzkartal:601273852676276235> | **Nsfw**: Sadece **Premium** kullanıcılara özeldir.**Parasızdır**,kullanmak için sahibimle iletişime geçiniz. **Elwasy#3071** \n<a:krmzkartal:601273852676276235> | **Zamanlı Yazı**: Sadece **Premium** kullanıcılara özeldir.**Parasızdır**,kullanmak için sahibimle iletişime geçiniz. **Elwasy#3071**\n <a:krmzkartal:601273852676276235> | **Sponsor**: Sadece **Premium** kullanıcılara özeldir.**Parasızdır**,kullanmak için sahibimle iletişime geçiniz. **Elwasy#3071**`)
      .addField(`<a:fast_parrot:599310200163401748> » Linkler`, `[Bot Davet Linki](https://discordapp.com/) **|** [Destek Sunucusu](https://discord.gg) **|** [Bota Oy Ver (Vote)](https://discordbots.org/) **|** [Web Sitesi](https://asistanbott.glitch.me/)`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  
  };
  
  exports.help = {
    name: 'premium',
    description: 'yardım',
    usage: 'premium'
  };