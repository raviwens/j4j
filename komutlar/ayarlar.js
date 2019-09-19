  const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require("../emojiler.json");
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
\n${db.has(`botkoruma_${message.guild.id}`) ? `${emojiler.onaylı} **Bot koruma kanalı:** ${client.channels.get(db.fetch(`botkoruma_${message.guild.id}`))} `: `${emojiler.gold2} **Bot koruma kanalını ayarlamak için:** \n${emojiler.kup} \`!botkoruma #kanal\``}
\n${db.has(`yazilihgbb_${message.guild.id}`) ? `${emojiler.onaylı} **Yazılı HGBB kanalı:** ${client.channels.get(db.fetch(`yazilihgbb_${message.guild.id}`))} `: `${emojiler.gold2} **Yazılı HGBB kanalını ayarlamak için:** \n${emojiler.kup} \`!yazılı-hgbb #kanal\``}
\n${db.has(`resimlihgbb_${message.guild.id}`) ? `${emojiler.onaylı} **Resimli HGBB kanalı:** ${client.channels.get(db.fetch(`resimlihgbb_${message.guild.id}`))} `: `${emojiler.gold2} **Resimli HGBB kanalını ayarlamak için:** \n${emojiler.kup} \`!resimli-hgbb #kanal\``}
\n${db.has(`guard_${message.guild.id}`) ? `${emojiler.onaylı} **Güvenlik kanalı:** ${client.channels.get(db.fetch(`guard_${message.guild.id}`))} `: `${emojiler.gold2} **Güvenlik kanalını ayarlamak için:** \n${emojiler.kup} \`!güvenlik #kanal\``}
\n${db.has(`otorolKanal_${message.guild.id}`) ? `${emojiler.onaylı} **Otorol kanalı:** ${client.channels.get(db.fetch(`otorolKanal_${message.guild.id}`))} `: `${emojiler.gold2} **Otorol ayarlamak için:** \n${emojiler.kup} \`!otorol @rol #kanal\``}

  
`]
  
  const ayarlar = new Discord.RichEmbed()
  .setColor("0x70ff96")
  .setTitle(`${emojiler.gold1} **${message.guild.name} Sunucusunun Ayarları**`, message.guild.iconURL)
  .setDescription(sayfa)
  .setTimestamp()
  .setFooter(`${client.user.username} Ayarlar`)
  message.channel.send(ayarlar)

 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: '',
    usage: 'ayarlar',
  };  