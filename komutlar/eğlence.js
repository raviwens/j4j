const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:cedenme:601271998026350592> Eğlence - Komutları 1 <a:cedenme:601271998026350592>`, `<a:sallananemoji:601273850738507817> | **!!alkış**: Bot komudunu yazdıktan sonra alkışlama gifi gönderir.\n<a:sallananemoji:601273850738507817> | **!!espiri**: Rastgele bir espiri patlatır.\n<a:sallananemoji:601273850738507817>| **!!kafasınasık**: İstediğiniz kişinin kafasına sıkar.\n<a:sallananemoji:601273850738507817> | **!!kahkaha**: Kahkaha gifi gönderir.\n<a:sallananemoji:601273850738507817> | **!!korkut**:  Korkunç gif gönderir.`)
      .addField(`<a:cedenme:601271998026350592> Eğlence - Komutları 2 <a:cedenme:601271998026350592>`, `<a:sallananemoji:601273850738507817> | **!!koş**:  Koşma gifi paylaşır.\n<a:sallananemoji:601273850738507817> | **!!mcskin**: Kostümünüzü atar.\n<a:sallananemoji:601273850738507817> | **!!söv**: İstediğiniz arkadaşınıza söver.\n<a:sallananemoji:601273850738507817> | **!!şanslısayım**: Şanslı olduğunuz sayıyı belirtir.\n<a:sallananemoji:601273850738507817> | **!!şanslırengim**: Şanslı olduğunuz rengi belirtir.`)
      .addField(`<a:cedenme:601271998026350592> Eğlence - Komutları 3 <a:cedenme:601271998026350592>`, `<a:sallananemoji:601273850738507817> | **!!çekiç**: İstediğiniz arkadaşa çekiç atar.\n<a:sallananemoji:601273850738507817> | **!!tekmeat**: İstediğiniz arkadaşa tekme atar.\n<a:sallananemoji:601273850738507817> | **!!wasted**: Profilinize wasted efekti verir.\n <a:sallananemoji:601273850738507817> | **!!yazı-tura**: Yazı mı Tura mı para atar. \n<a:sallananemoji:601273850738507817> | **!!slots**: Slot çevirir.`)
      .addField(`<a:cedenme:601271998026350592> Eğlence - Komutları 4 <a:cedenme:601271998026350592>`, `<a:sallananemoji:601273850738507817> | **!!rip**: istediğiniz arkadaşın mezar taşını atar.\n<a:sallananemoji:601273850738507817> | **!!pixel**: İstediğiniz arkadaşın fotoğrafını pixelleştirir.\n<a:sallananemoji:601273850738507817> | **!!kafadansı**: Bot kafa dansı gifi atar. \n<a:sallananemoji:601273850738507817> | **!!discorddakiyıkık**: Rastgele birini etiketler ve gif gönderir.\n<a:sallananemoji:601273850738507817> | **!!woodie**: Oldların gözü yaşlı.`)
      .addField(`<a:cedenme:601271998026350592> Eğlence - Komutları 5 <a:cedenme:601271998026350592>`, `<a:sallananemoji:601273850738507817> | **!!stresçarkı**: Stres çarkı çevirirsiniz.\n<a:sallananemoji:601273850738507817> | **!!lafsoktukelek @etiket**: Etiketlediğiniz kişiye laf sokar.\n<a:sallananemoji:601273850738507817> | **!!twitch-gif**: Rastgele twitchden gif paylaşır.\n<a:sallananemoji:601273850738507817> | **!!olay**: Olay varmış beyler toplanın. \n<a:sallananemoji:601273850738507817> | **!!kavgaet**: Belirlediğiniz kullanıcıyla kavga edersiniz.`)
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
    name: 'eğlence',
    description: 'yardım',
    usage: 'eğlence'
  };