  const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }


let botkoruma = db.fetch(`botkoruma_${message.guild.id}`)

  const sayfa = [`**${message.guild.name} | Ayarları**
\n**Sunucu prefixi :** /
\n**Bot Koruma:** ${db.has(`botkoruma_${message.guild.id}`) ? `Kapalı` : `d`}
\n**Küfür engeli:** ${db.has(`kufur_${message.guild.id}`) ? `Açık ` : ` Kapalı ` }
\n**Büyük harf engeli:** ${db.has(`capsEngel_${message.guild.id}`) ? `Açık ` : ` Ayarlanmamış ` }
\n**Otorol:** ${db.has(`autoRole_${message.guild.id}`) ? ` \`@${message.guild.roles.get(db.fetch(`autoRole_${message.guild.id}`)).name}\`` : ` Ayarlanmamış `}
\n**Otorol Kayıt Kanalı:** ${db.has(`otorolKanal_${message.guild.id}`) ? ` \`${message.guild.channels.get(db.fetch(`otorolKanal_${message.guild.id}`)).name}\` ` : ` Ayarlanmamış `}
\n**Sayaç kanalı:** ${db.has(`sayacKanal_${message.guild.id}`) ? ` \`${message.guild.channels.get(db.fetch(`sayacKanal_${message.guild.id}`)).name}\` `: ` Ayarlanmamış  `}
\n**Sayaç:** ${db.has(`sayacSayi_${message.guild.id}`) ?` \`${db.fetch(`sayacSayi_${message.guild.id}`)}\` ` : `Ayarlanmamış `}
\n**Giriş Çıkış kanalı:** ${db.has(`hgKanal_${message.guild.id}`) ? ` ${client.channels.get(db.fetch(`hgKanal_${message.guild.id}`))} `  : `Ayarlanmamış `}

  
`]
  
  const ayarReis = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setDescription(sayfa)
  .setTimestamp()
  
  message.channel.send(ayarReis)

 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["settings",'sunucu-ayarları','sunucuayarları','sunucuayarı'],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: '',
    usage: 'ayarlar',
  };  