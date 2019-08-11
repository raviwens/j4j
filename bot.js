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
require('./util/eventLoader')(client);
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let hereEngel = JSON.parse(fs.readFileSync("././jsonlar/hereEngelle.json", "utf8"));
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8")); 



var prefix = ayarlar.prefix;


//----------------------Bot'un Bağlandı Kısmı -----------------------------//


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame(`!!yardım | !!davet | asistanbott.glitch.me`, "https://www.twitch.tv/dexter036d");
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




//----------------------------------lİNK ENGELLEME-----------------------------//

client.on("message", msg => { 
if (!linkEngel[msg.guild.id]) return;
if (linkEngel[msg.guild.id].linkEngel === "kapali") return;
    if (linkEngel[msg.guild.id].linkEngel === "acik") {
    var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/)
    if (regex.test(msg.content)== true) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Link Engeli!")
        .setDescription(`Bu sunucuda linkler **${client.user.username}** tarafından engellenmektedir! Link atmana izin vermeyeceğim!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});

//----------------------------------lİNK ENGELLEME SON-----------------------------//

//----------------------------------KÜFÜR ENGELLEME-----------------------------//

client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.reply("Küfür etmemelisin **!!Emoji Koyulacak!!**!").then(message => message.delete(3000));
    }
}
    }
});

//----------------------------------KÜFÜR ENGELLEME SON-----------------------------//

//----------------------------------CAPSLOCK ENGELLEME-----------------------------//  
client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

//----------------------------------CAPSLOCK ENGELLEME SON-----------------------------//  


//----------------------------------EVERYONE ENGELLEME-----------------------------// 
client.on("message", msg => {
  if (!msg.guild) return;
  if (!hereEngel[msg.guild.id]) return;
  if (hereEngel[msg.guild.id].hereEngel === 'kapali') return;
    if (hereEngel[msg.guild.id].hereEngel=== 'acik') {
      const here = ["@here", "@everyone"];
  if (here.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete());
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Everyone ve Here Engeli!")
        .setDescription(`Bu sunucuda Everyone ve Here yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});

//----------------------------------EVERYONE ENGELLEME SON-----------------------------// 


//----------------------------------GİRİŞ ÇIKIŞ-----------------------------// 

client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

//----------------------------------GİRİŞ ÇIKIŞ SON-----------------------------// 


//----------------------------------SAYAÇ-----------------------------// 

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: **${member.user.tag}**, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: **${member.user.tag}**, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
                     

//----------------------------------SAYAÇ SON-----------------------------// 




//----------------------------------Destek Sistemi-----------------------------// 

client.on(`message`, async m => {
    
  
let kanalid = `610192034543697960`;
  if(m.channel.id === kanalid) {
    
    m.delete()
    if(m.author.bot) return;
      if(m.guild.channels.get(await db.fetch(`talep_${m.author.id}`))) return m.author.send(`Talep kanalını 2 kere açamazsın önce eskisini kapatmalısın!\nEski talep kanalın: <#${await db.fetch(`talep_${m.author.id}`)}>`);
    m.guild.createChannel(`talep_arso`).then(i=>{
      db.add(`talep`, 1)
      db.set(`talepknl_${m.channel.id}`, m.author.id)
      db.set(`talep_${m.author.id}`, i.id)
      
      
      m.guild.members.forEach(uye=>{
        i.overwritePermissions(uye,{
                    VIEW_CHANNEL: false,
                })
      })
          m.guild.roles.forEach((rol) => {
            if (rol.hasPermission("ADMINISTRATOR")) {
                i.overwritePermissions(rol,{
                    VIEW_CHANNEL: true,
                })
                i.overwritePermissions(m.author.id,{
                    VIEW_CHANNEL: true,
                })
            }
        })
      
         
        
        i.send("@everyone @here").then(mesajaq => {
          setTimeout(function() {
            mesajaq.delete();
          }, 1000)
        })
      let a = moment().format('HH')
      let b = Math.floor(a)+Math.floor(3);
      let c = `İstenilen Zaman: ${b}.${moment().format('mm')}`;
    const embed = new Discord.RichEmbed()
      .setTitle("Yeni Bir Talep Kanalı Açıldı!")
      .addField("Talep açan", m.author)
      .addField("Talep Sebebi", m.content)
      .setColor("#36393F")
      .setFooter(c + " - Kapatmak İçin " + prefix + "kapat", client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      i.send({embed});
    })
    
  }
})


//----------------------------------Destek Sistemi SON-----------------------------// 

const Gamedig = require('gamedig');

client.on('ready', async() => {

let server;

 setInterval(() => {
 if(client.channels.has('592430602419044365')) server = client.channels.get('592430605300662272').guild.id


var bilgi = require('game-server-query');
  Gamedig.query(
    {
        type: 'csgo',
        host: "74.91.112.208",
      
    })
 client.channels.find("id",'592430595947102250').setName('Adı : ' + Gamedig.name + '1');
 client.channels.find("id",'592430598040059944').setName('Map : ' + Gamedig.map);
 client.channels.find("id",'592430600200388629').setName('Oyuncular : ' + Gamedig.players );
  }, 6000); 
});
  


client.login(ayarlar.token);

