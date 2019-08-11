const Discord = require('discord.js');
const db = require(`quick.db`);

exports.run = async (client, message, args, params) => {
  
let m = message;
  const embed = (baslik, msj) => {
    const embed = new Discord.RichEmbed()
      .setTitle(`${baslik}`)
      .setDescription(`${msj}`)
      .setColor("#36393F")
      .setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      m.channel.send({embed});
  };

  
  
  let uyar1 = m.guild.roles.get(`uyarı1 rolün idsi`)
    let uyar2 = m.guild.roles.get(`uyarı2 rolün idsi`)
    let uyar3 = m.guild.roles.get(`uyarı3 rolün idsi`)
    let uyarlog = "Log kanalı idsi";
    if(!m.member.hasPermission(`ADMINISTRATOR`)) return embed("Hata!", `Yönetici yetkin yok!`);
    if(!m.mentions.users.first()) return embed("Hata!", `Birini etiketlemelisin!`);
    if(m.guild.members.get(m.mentions.users.first().id).bannable === false) return embed("Hata!", `Yetkilileri uyaramazsın!`);
    if(m.mentions.users.first().bot) return embed("Hata!", `Botlar uyarılamaz!`)
    db.add(`uyar_${m.mentions.users.first().id}`, 1);
    let rol;
    if((await db.fetch(`uyar_${m.mentions.users.first().id}`)) === 1) {
      rol = uyar1;
      m.guild.members.get(m.mentions.users.first().id).addRole(uyar1);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar2);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar3);
    } else if((await db.fetch(`uyar_${m.mentions.users.first().id}`)) === 2) {
      rol = uyar2;
      m.guild.members.get(m.mentions.users.first().id).addRole(uyar2);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar1);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar3);
    } else if((await db.fetch(`uyar_${m.mentions.users.first().id}`)) === 3) {
      rol = uyar3;
      m.guild.members.get(m.mentions.users.first().id).addRole(uyar3);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar2);
      m.guild.members.get(m.mentions.users.first().id).removeRole(uyar1);
    } 
    else {
      rol = `UYARI SINIRI AŞILMIŞ!!! :warning: (Sınır: 3)`;
    }
    embed("Başarılı!", `${m.mentions.users.first()} uyarıldı!\n${client.channels.get(uyarlog)}`)
 /* const selamaq = new Discord.RichEmbed()
      .setTitle(`Eylem: Uyarı`)
      .addField("Yetkili", m.author)
  .addField("Uyarılan", m.mentions.users.first())
  .addField("Uyarılanın uyarı sayısı", await db.fetch(`uyar_${m.mentions.users.first().id}`))
  .addField("Uyarılana verilen rol", rol.name)
      .setColor("#36393F")
      .setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      client.channels.get(uyarlog).send({selamaq});*/
    const aembed = new Discord.RichEmbed()
      .setTitle(`Eylem Uyarı`)
      .setDescription(`Uyarılan: ${m.author}\nUyarılan: ${m.mentions.users.first()}\nUyarılanın uyarı sayısı: ${await db.fetch(`uyar_${m.mentions.users.first()}`)}\nUyarılana verilen rol: ${rol}`)
      .setColor("#36393F")
      .setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      client.channels.get(uyarlog).send(aembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "uyar",
  description: "Belirtilen üyeyi uyarır",
  usage: "uyar [@üye]"
};