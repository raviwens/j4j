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
     
  let x;
        let x2;
        let x3;
        let x4;
        let x5;
        let x6;
        let x7;
        let x8;
        let x9;
        let x10;
        let x11;
        
        if (msg.guild.members.get(user.id).hasPermission("ADMINISTRATOR")) x = "Yönetici"
        if (!msg.guild.members.get(user.id).hasPermission("ADMINISTRATOR")) x = "-"
        
        if (msg.guild.members.get(user.id).hasPermission("VIEW_AUDIT_LOG")) x2 = "- Denetim kayıdını görme"
        if (!msg.guild.members.get(user.id).hasPermission("VIEW_AUDIT_LOG")) x2 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_GUILD")) x3 = "- Sunucuyu yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_GUILD")) x3 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_ROLES")) x4 = "- Rolleri yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_ROLES")) x4 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_CHANNELS")) x5 = "- Kanalları yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_CHANNELS")) x5 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("KICK_MEMBERS")) x6 = "- Üyeleri at"
        if (!msg.guild.members.get(user.id).hasPermission("KICK_MEMBERS")) x6 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("BAN_MEMBERS")) x7 = "- Üyeleri yasakla"
        if (!msg.guild.members.get(user.id).hasPermission("BAN_MEMBERS")) x7 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_MESSAGES")) x8 = "- Mesajları yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_MESSAGES")) x8 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_NICKNAMES")) x9 = "- Kullanıcı adlarını yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_NICKNAMES")) x9 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_EMOJIS")) x10 = "- Emojileri yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_EMOJIS")) x10 = ""
        
        if (msg.guild.members.get(user.id).hasPermission("MANAGE_WEBHOOKS")) x11 = "- Webhookları yönet"
        if (!msg.guild.members.get(user.id).hasPermission("MANAGE_WEBHOOKS")) x11 = ""

   
  const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        
        .addField(`Oyun`, userinfo.od1 , false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('fcf803')
        .addField(`Katılım Tarihi (Sunucu)`, "`"+gün2+"` gündür **Sunucu**'da.", false)
        .addField(`Katılım Tarihi (Discord)`,"`"+ gün+"` gündür **Discord**'da.", false)
        .addField(`ID:`, userinfo.id, true)
        .addField(`Robot doğrulaması:`, userinfo.bot, true)
        .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "everyone").map(r => r).join(' **|** ') || "**Hiç bir role sahip değil.**"}`, false)
      .addField(`Yetkileri:`, `${x} ${x2} ${x3} ${x4} ${x5} ${x6} ${x7} ${x8} ${x9} ${x10} ${x11}`)
  .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj , false)
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

