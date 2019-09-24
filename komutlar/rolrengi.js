const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  let prefix = ayarlar.prefix
  let rol = args[0]
      let renk = args[1]
   if (!renk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir Renk Kodu belirtmelisin\n Örnek Kullanım ${prefix}rolrengi @rol rolkodu\n Renk Kodunun başına # Koymayın`));
   message.guild.roles.get(rol).setColor(renk)
  message.channel.send(`Başarıyla rol rengi #${renk} olarak ayarlandı`);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
    kategori: 'bot'
};

exports.help = {
    name: 'rolrengi',
    description: 'Rolun Rengini Değiştirir',
    usage: 'rolrengi @rol renkkodu'
}