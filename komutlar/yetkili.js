const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Asistan`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:cedenme:601271998026350592> Yetkili - Komutları 1 <a:cedenme:601271998026350592>`, `<a:yeilbit:601273857189609473> | **!!statayarla**: Sunucu istatistik paneli ayarlar.\n <a:yeilbit:601273857189609473> | **!!reklamtaraması**: Oynuyor kısmında reklam yapanlar görüntülenir. \n<a:yeilbit:601273857189609473> | **!!sunucu-kur**: Hazır sunucu kurar.\n<a:yeilbit:601273857189609473> | **!!rol-oluşutr**: Hazır rol oluşturur.(Kurucu,Admin,Yetkil,Üye,Kayıtsız Üye,Bot).\n<a:yeilbit:601273857189609473> | **!!mute [İsim] (Süre)**: Etiketlediğiniz kişiye susturulmuş rolü verir.`)
      .addField(`<a:cedenme:601271998026350592> Yetkili - Komutları 2 <a:cedenme:601271998026350592>`, `<a:yeilbit:601273857189609473> | **!!capslock-engelle**: ile Komudu yazdığınız kanalda caps lock açılmasını engeller.\n<a:yeilbit:601273857189609473> | **!!yaz**: İstediğinizi bota yazdırırsınız.\n<a:yeilbit:601273857189609473> | **!!slowmode (Süre)**: Yazdığınız kanalı yavaş moda alır.\n<a:yeilbit:601273857189609473> | **!!ban** @etiket: Etiketlediğiniz kişiyi sunucudan yasaklar.\n<a:yeilbit:601273857189609473> | **!!kick** @etiket: Etiketlediğiniz kişiyi sunucudan kovar.`)
      .addField(`<a:cedenme:601271998026350592> Yetkili - Komutları 3 <a:cedenme:601271998026350592>`, `<a:yeilbit:601273857189609473> | **!!temizle**1-99 arası sayı belirtin: İstediğiniz kadar mesajı siler.\n<a:yeilbit:601273857189609473> | **!!tag**: İstediğiniz tagı yeni gelen üyelere verir.\n<a:yeilbit:601273857189609473> | **!!üyebilgi**:Üyelerinizin bilgilerini gösterir.\n <a:yeilbit:601273857189609473> | **!!kapatotoyazı**: Otomatik rolün mesajını kapatır.\n<a:yeilbit:601273857189609473> | **!!otorol-ayarla** @Rol adı: Bot istediğiniz rolden yukarıda olmak zorundadır aksi taktirde rol verilmez.`)
      .addField(`<a:cedenme:601271998026350592> Yetkili - Komutları 4 <a:cedenme:601271998026350592>`, `<a:yeilbit:601273857189609473> | **!!kapatotorol**: Otorol komudunu kapatır.\n<a:yeilbit:601273857189609473> | **!!modlog-ayarla** #kanaladı: Sunucuda komut ile banlanan kicklenen susturulan kişiler mod-log kanalında gözükür.\n<a:yeilbit:601273857189609473> | **!!modlog-sıfırla** : mod-log kanalını sıfırlar.\n<a:yeilbit:601273857189609473> | **!!everyone-engelle**: everyone - here etiketini yetkisiz olanlardan siler. \n <a:yeilbit:601273857189609473> | **!!statsil**: Sunucu istatistik panelini ayarladıysanız ayarladığınız paneli siler.`)
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
    name: 'yetkili',
    description: 'yardım',
    usage: 'yetkili'
  };