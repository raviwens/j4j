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

  const sayfa = [`
${db.has(`botkoruma_${message.guild.id}`) ? `**Bot Koruma:** ${client.channels.get(db.fetch(`botkoruma_${message.guild.id}`))} `: `**Bot koruma kanalını ayarlamak için:** \n\`!botkoruma #kanal\``}

  
`]
  
  const ayarlar = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setDescription(sayfa)
  .setTimestamp()
  
  message.channel.send(ayarlar)

 
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