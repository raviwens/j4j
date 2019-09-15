const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {

    let mesaj = args.slice(1).join(' ')
    db.set(`m_${message.guild.id}`, mesaj)
    message.channel.send("Yazılı HGBB mesajı`"+ mesaj + "olarak ayarlandı.");
 db.set(`mdurum_${message.guild.id}`,"acik")
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hgbb-mesaj',
  description: '',
  usage: ''
};
