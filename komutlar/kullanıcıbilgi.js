const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();
const emojiler= require('../emojiler.json');
const botadi = "Server Guard"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
   const ktarih = new Date().getTime() - user.createdAt.getTime();
   const starih = new Date().getTime() - msg.guild.members.get(user.id).joinedAt.getTime();
  let onaylı = `${emojiler.onaylı} **Güvenilir**`
let onaysız = `${emojiler.basarisiz} **Güvenilmez**`
    const gün = moment.duration(ktarih).format("D")
  const gün2 = moment.duration(starih).format("D")
    var kontrol;
      if (ktarih > 1296000000) kontrol = onaylı
    if (ktarih < 1296000001) kontrol = onaysız
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Şu anda oyun oynamıyor."
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `${emojiler.dnd} Rahatsız Etmeyin`)
        .replace("online", `${emojiler.aktif} Çevrimiçi`)
        .replace("idle", `${emojiler.bosta} Boşta`)
        .replace("offline", `${emojiler.offline} Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `${emojiler.gold1} **İnsan**`)
        .replace("true", `${emojiler.gold2} **Bot**`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        
        .addField(`Oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('fcf803')
        .addField(`Katılım Tarihi (Sunucu)`, "`"+gün2+"` gündür **Sunucu**'da.", false)
        .addField(`Katılım Tarihi (Discord)`,"`"+ gün+"` gündür **Discord**'da.", false)
        .addField(`ID:`, userinfo.id, true)
        .addField(`Robot doğrulaması:`, userinfo.bot, true)
        .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Hiç bir role sahip değil.**"}`, false)
        .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj, false)
      .addField("Güvenilirlik",kontrol)
        .setFooter(`${botadi} Kullanıcı Bilgi`)
        msg.channel.send(uembed)
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgi',
  description: '',
  usage: 'kullanıcıbilgi'
};

