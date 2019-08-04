const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
    let mesaj = args.slice(0).join('592430585524518912 '); // Siparis Kanal ID
    if (mesaj.length < 1) return message.channel.send('<a:qwe2:601527835890286612> Lütfen Siparişinizi Yazınız (örn: !!sipariş deneme)');
  let incidentchannel = message.guild.channels.find(`id`, "592430588103884811"); // Teslimat Kanal ID
    if(!incidentchannel) return message.channel.send("<a:qwe2:601527835890286612> **siparişler** kanalını bulamıyorum.");
    incidentchannel.send(` Asistan | **Sipariş**\n\nSipariş Detayı: ${mesaj} ***\n Sipariş Veren: ${message.author}***`);
    message.channel.send('<a:qwe2:601533562356760586> Siparişiniz #siparişler kanalına İletildi. Teslimatınız Geleceği Zaman #teslimatlar kanalına Bildirilecek ')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['siparis'],
  permLevel: 0
};

exports.help = {
  name: 'sipariş',
  description: 'Siparis',
  usage: 'sipariş <mesaj>'
};