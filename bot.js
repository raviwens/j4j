const express = require('express');
const app = express();
const whois = require('whois')
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
  client.user.setActivity('Fakeleri izliyorum...');
      }, 

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
client.login(ayarlar.token); 