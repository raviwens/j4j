const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args, params) => {
let m = message;
if(m.guild.channels.get(await db.fetch(`talep_${m.author.id}`))) {
m.channel.send('Eğer talebinin kapatılmasını istiyorsan ``onayla`` yazınız')
  if(m.content === 'onayla'){
    m.channel.send('onayladin')
  
   

  }
  } else {
      return m.channel.send(`Bu kanal talep kanalı değil yada talep kanalını açan kişi değilsiniz!`)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kapat",
  description: "Talep kanalını kapatır",
  usage: "kapat"
};