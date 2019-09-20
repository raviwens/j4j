const Discord = require("discord.js"); // Requiring Library just for the sick of being th
const db = require("quick.db");

var authors = [];
var warned = [];
var banned = [];
var messageLog = [];

module.exports = async (client, options) => {
  
  
  const uyar = (options && options.uyar) || 7; //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  const ban = (options && options.ban) || 15;  //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  const zaman = (options && options.zaman) || 2000; // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  const uyarM = (options && options.uyarM) || "Lütfen spamı durdur!"; //Spamda gönderilecek uyarı mesajı.
  const banM = (options && options.banM) || "Ban hammerı kafasına yedi!"; //Ban da gönderilcek uyarı mesajı.
  const maxUyarı = (options && options.maxUyarı || 7); //Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  const maxBan = (options && options.maxBan || 10);//Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  const deleteMessagesAfterBanForPastDays = (options && options.deleteMessagesAfterBanForPastDays || 7); // Default Value: 10
  const ozelRol = (options && options.ozelRol) || []; 
  const ozelKisi = (options && options.ozelKisi) || []; 
  const logKanal = (options && options.logKanal);//LOG kanalı
  
  if(isNaN(uyar)) throw new Error("uyar sayı olmak zorunda.");
  if(isNaN(ban)) throw new Error("ban sayı olmak zorunda.");
  if(isNaN(zaman)) throw new Error("zaman sayı olmak zorunda.");
  if(!isNaN(banM) || banM.length < 5) throw new Error("banM en az 5 karakter olmak zorunda.");
  if(!isNaN(uyarM) || uyarM.length < 5) throw new Error("uyarM en az 5 karakter olmak zorunda.");
  if(isNaN(maxUyarı)) throw new Error("maxUyarı sayı olmak zorunda.")
  if(isNaN(maxBan)) throw new Error("maxBan sayı olmak zorunda.");
  if(isNaN(deleteMessagesAfterBanForPastDays)) throw new Error("deleteMessagesAfterBanForPastDays sayı olmak zorunda.");
  if(ozelRol.constructor !== Array) throw new Error("ozelRol must be an array.");
  if(ozelKisi.constructor !== Array) throw new Error("ozelKisi must be an array.");
  
  // Custom 'checkMessage' event that handles messages
 client.on("checkMessage", async (message) => {
 
  // Ban the User
  const banUser = async (m, banMsg) => {
    for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }
  
      banned.push(m.author.id);
  
      let user = m.guild.members.get(m.author.id);
      if (user) {
        user.ban(deleteMessagesAfterBanForPastDays).then((member) => {
          m.channel.send(`<@!${m.author.id}>, ${banMsg}`);
          return true;
        }).catch(() => {
          m.channel.send(`Ooops, Sana karşı ban yetkim yok sanki hee? <@!${message.author.id}>!`);
          return false;
      });
    }
  }
  
    
   // Warn the User
   const warnUser = async (m, reply) => {
    warned.push(m.author.id);
    m.channel.send(`<@${m.author.id}>, ${reply}`); // Regular Mention Expression for Mentions
   }

    if (message.author.bot) return;
    if (message.channel.type !== "text" || !message.member || !message.guild || !message.channel.guild) return;
   
    if (message.member.roles.some(r => ozelRol.includes(r.name)) || ozelKisi.includes(message.author.tag)) return;

    if (message.author.id !== client.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        "time": currentTime,
        "author": message.author.id
      });
      
      messageLog.push({
        "message": message.content,
        "author": message.author.id
      });
      
      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].message == message.content && (messageLog[i].author == message.author.id) && (message.author.id !== client.user.id)) {
          msgMatch++;
        }
      }
      
      if (msgMatch == maxUyarı && !warned.includes(message.author.id)) {
               
      warnUser(message, uyarM);
        console.log("Spam saldırısı var! Bunu korumaya çalışıyorum.");
      
      }
      if (msgMatch == maxBan && !banned.includes(message.author.id)) {
   
        banUser(message, banM);
          
          }
      

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - zaman) {
          matched++;
          if (matched == uyar && !warned.includes(message.author.id)) {
      
          const channel = client.channels.find('id', logKanal)
          const uyarembed = new Discord.RichEmbed()
      .setColor('0xdbdb00')
      .setTitle('Anti Spam Sistemi')
      .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo-kn9X2JTtDZa1x3uGjSd8vGnFTu6AmmVQ_w0mBHT6dxfdtFs')
      .addField(`Spam Algılandı`,`${message.author.username}'in spam yaptığı saptandı ve uyarı mesajı gönderildi.`)
      .setFooter(client.user.username + ' Anti Spam Sistemi', client.user.avatarURL)
      .setTimestamp()
   
          channel.send(uyarembed);
          warnUser(message, uyarM);
      }
          } else if (matched == ban) {
            if (!banned.includes(message.author.id)) {
            
              const banembed = new Discord.RichEmbed()
      .setColor('0xff6161')
      .setTitle('Anti Spam Sistemi')
      .setThumbnail('https://cdn.discordapp.com/attachments/619564474096943129/620213588778418195/anibanned.gif')
      .addField(`Spam Algılandı`,`${message.author.username} uyarımı dinlemediği için kafasına BAN hammerı geçirdim.`)
      .setFooter(client.user.username + ' Anti Spam Sistemi', client.user.avatarURL)
      .setTimestamp()
         const channel = client.channels.find('id', logKanal)
        
          channel.send(banembed);
        
              banUser(message, banM);
          
          
            }
          }
       else if (authors[i].time < currentTime - zaman) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          banned.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  });
}