const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const emojiler = require('../emojiler.json')

exports.run = (client, message, args) => {
  let prefix = ayarlar.prefix
  let rol = args[0]
      let renk = args[1]
      if(args[1]> 18) return  message.channel.send(emojiler.basarisiz + " Lütfen doğru bir rol ID giriniz.");
     if(args[1] < 18) return  message.channel.send(emojiler.basarisiz + " Lütfen doğru bir rol ID giriniz.");
     
    if (!renk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir Renk Kodu belirtmelisin\n Örnek Kullanım \`!rolrengi rolid hexcode\`\nNot: **hexcode**'ün başına \`#\` koymayınız.`));
   message.guild.roles.get(rol).setColor(renk)
  message.channel.send(emojiler.onaylı +` **${rol}** ID'li rolün rengi \`#${renk}\` olarak ayarlandı.`);
    
          
      
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