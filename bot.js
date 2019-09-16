const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require("quick.db")
const Jimp = require("jimp")
const request = require('node-superfetch');
const ms = require('parse-ms')
const moment = require('moment');
const emojiler= require('./emojiler.json');
require('./util/eventLoader')(client);
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let hereEngel = JSON.parse(fs.readFileSync("././jsonlar/hereEngelle.json", "utf8"));
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8")); 
require('moment-duration-format');



var prefix = ayarlar.prefix;


//----------------------Bot'un Bağlandı Kısmı -----------------------------//


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setActivity('Özel Kod Yazılır / Satılır');
        }, 
  console.log("Bağlandım!")
);

//----------------------Bot'un Bağlandı Kısmı SON-----------------------------//


//------------------Message Kısmı Burayı silersen bot cevap vermez ----------------// 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  let permlvl = 0;
  if(!message.guild) {
  if (message.author.id === ayarlar.sahip) permlvl = 4;
	return; }
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//------------------Message Kısmı Burayı silersen bot cevap vermez SON----------------// 

/*
client.on('ready', async() => {

let server;

 setInterval(() => {

var query = require('game-server-query');
query(
    {
        type: 'csgo',
        host: 'public.dustarena.net'
    },   function(state) {
    
        if(state.error){
         
        }
        else {
          
          console.log(state);
  client.channels.find("id",'612192244568555520').setName(`${state.name}`);
client.channels.find("id",'612192315066548235').setName(`Map: ${state.map}`);  
client.channels.find("id",'612192410327449639').setName(`Oyuncular: ${state.raw.numplayers}/${state.maxplayers}`); 
  client.channels.find("id",'612192430506115082').setName(`${state.query.host}`); 
  
  }
    }
);
   
  }, 6000); 
});
var istek = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = 'PLAY.CRAFTRISE.TC'; // Your MC server IP or hostname address
var mcPort = 25565; // Your MC server port (25565 is the default)
        
client.on('ready', async() => {
  
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        istek(url, function(err, response, body) {
            if(err) {
                console.log(err);
              }
            body = JSON.parse(body);
            if(body.online) {
              
                if(body.players.now) {
                  var s = body.duration
        const duration = moment.duration(s).format(" D [gün], H [saat], m [dakika], s [saniye]");
      /*
client.channels.find("id",'612193568085377024').setName(body.motd);
   client.channels.find("id",'612193588305985536').setName( `Aktif oyunucu: ${body.players.now}/${body.players.max}`);
   client.channels.find("id",'612278774666493953').setName( `${duration}'dır aktif.`);
 client.channels.find("id",'612193605746032640').setName(mcIP);

                } else {
                  
                   }
            }
 });
  
  
  });
  client.on('message', message=> {
  let tag = "Ping"
var role = message.guild.roles.find(role => role.name === "ban3")
  message.guild.members.forEach(u => {
    if(u.user.username.includes(tag)) {
      u.addRole(role)
    }else{
      u.removeRole(role)
    }
  })
});

  
  
  */
////GUVENLIK///
client.on('guildMemberAdd',async member => {
  let gkisi = client.users.get(member.id);
  let gkanal = client.channels.get(db.fetch(`guard_${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const onaysız = await Canvas.loadImage('https://cdn.discordapp.com/attachments/542420184309301279/622408941384630272/onaysizz.jpg')
    const onaylı = await Canvas.loadImage('https://cdn.discordapp.com/attachments/542420184309301279/622405001007857668/guvenilor.jpg')
    const ktarih = new Date().getTime() - gkisi.createdAt.getTime();
    const gün = moment.duration(ktarih).format("D")   
    var kontrol;
      if (ktarih > 1296000000) kontrol = onaylı
    if (ktarih < 1296000001) kontrol = onaysız

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(190, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 153,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'SERVER-GUARD.png');
 if(member.user.bot === true) return;
  gkanal.send(attachment)
});
////////GUVENLIK/////
client.on("ready", () =>{
    const spam = require("./spam.js");
 
spam(client, {
 
uyar: 7, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
ban: 15, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
maxUyarı: 5, //Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
maxBan: 7, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
zaman: 2000, //Spam tespit aralığı
uyarM: `${emojiler.basarisiz} Ooops, bu kadar hızlı yazma yoksa seni banlamak zorunda kalacağım.`, // Uyarı verildiğinde gösterilcek mesaj.
banM: `Spam yaptığı için banlandı. \n${emojiler.gold2} Sunucuyu korumaktayım, kötü amaçlı mesajlara izin veremem.`, //Ban atıldığında gösterilecek mesaj.
});
});
  client.on('message', msg => {
    let onay = db.fetch(`spam_${msg.guild.id}`)  
          if (onay == 'acik') {

  client.emit('checkMessage', msg); 
          }
  });
 

  client.on('message',async msg => {
    let onay = db.fetch(`afk_${msg.author.id}`)  
  let afkadam= msg.mentions.users.first() || msg.author;
        if(msg.content.startsWith(prefix + "afk")) return; 
    if(msg.content.includes(`<@${afkadam.id}>`))
        if(db.has(`afk_${afkadam.id}`)) {
          msg.delete(1000);
          const afkuyarı = new Discord.RichEmbed()
              .setDescription(emojiler.gold1 + ` **${client.users.get(afkadam.id).username}** adlı kullanıcımız şuanda AFK \n\n\`${db.fetch(`afksebep_${afkadam.id}`)}\` sebebi ile **AFK**`)
              .setColor('0xff6161')
              .setTimestamp()
          .setFooter(client.user.username + " AFK Sistemi", client.user.avatarURL)
          msg.channel.send(afkuyarı)
        
          
        }  
    if(onay == 'acik') {   
msg.member.setNickname(msg.author.username)
            msg.channel.send(`${emojiler.onaylı} **${msg.author.username}** adlı kullanıcı AFK modundan çıktı.`).then(msg => msg.delete(5000))
          db.delete(`afk_${msg.author.id}`)      
          }
  });

client.on('guildMemberAdd', async member => {
let mkanal = client.channels.get(db.fetch(`yazilihgbb_${member.guild.id}`)) 
if(member.user.bot === true) return;
mkanal.send(`${emojiler.oley} **${member.user.username}** sunucuya katıldı, oleyyy.`);
})
client.on('guildMemberRemove', async member => {
let mkanal = client.channels.get(db.fetch(`yazilihgbb_${member.guild.id}`)) 
 if(member.user.bot === true) return;
mkanal.send(`${emojiler.olamaz} **${member.user.username}** suncudan ayrıldı, puffff.`);
});

client.on('guildMemberAdd', async member => {
let botkoruma = client.channels.get(db.fetch(`botkoruma_${member.guild.id}`)) 
     let onay = db.fetch(`botguard_${member.guild.id}`)  
   if(member.user.bot !==true){ 
    }else{   
      if(onay = 'acik'){
botkoruma.send(`${emojiler.onaylı} \`${member.user.tag}\` adlı bot sunucudan atıldı.`);
 member.kick(client.user.username +" Bot Koruma Sistemi");
    }
    }
    });
  client.on("guildMemberAdd", message => { client.channels.get("kanal ID").setName(`🔵 Kişi Sayısı: ${message.guild.memberCount} 📤`); // kanal id yazan yerlere sesli kanalın id'sini sağtıklayıp kopyalayın ve yapıştırın }); //Sunucudan Çıktığın Kişi Sayını Azaltma client.on("guildMemberRemove", message => { client.channels.get("kanal ID").setName(`🔴 Kişi Sayısı: ${message.guild.memberCount} 📥`); });
  client.login(ayarlar.token);