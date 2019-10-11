const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`[PING] Açık tutuyorum...`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const pingDiscord = require('discord.js');
const client = new pingDiscord.Client();
const chalk = require('chalk');
const fs = require('fs');
const db = require("quick.db")
const moment = require('moment');
require('./util/eventLoader')(client);

//////////////////////////////////////////////
client.ayarlar = {
"durum":"dnd",//online , idle , dnd 
"oynuyor":"",
"prefix":"!",
"sahip":"SAHIP ID",
"token":"NjMwMzE4Mjg1OTE2ODY0NTEy.XZmj0Q.9pEGtFJ4n_WpOVnJCFYv6GmeXOM"
}
/////////////////////////////////////////////

const log = message => {
  console.log(`Kurulum: ${message}`);
};

client.commands = new pingDiscord.Collection();
client.aliases = new pingDiscord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut kurulacak.`);
   log(`-------------------------`);
   files.forEach(f => {
    let pingKodları = require(`./komutlar/${f}`);
  
    log(`Kurulan komut ~ ${pingKodları.help.name}.`);
    client.commands.set(pingKodları.help.name, pingKodları); 
    log(`-------------------------`);
    client.commands.set(pingKodları.help.name, pingKodları);
    pingKodları.conf.aliases.forEach(alias => {
    client.aliases.set(alias, pingKodları.help.name);
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
  if (message.member.hasPermission("MANAGE_CHANNELS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var hataKontrol = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;


client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(hataKontrol, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(hataKontrol, 'that was redacted')));
});


//// YAZILI GIRIS CIKIS BASLANGIC ////
client.on('guildMemberAdd', async member => {
let mkanal = client.channels.get(db.fetch(`yazilihgbb_${member.guild.id}`)) 
if(member.user.bot === true) return;
mkanal.send(` **${member.user.username}** sunucuya katıldı, oleyyy.`);
})
client.on('guildMemberRemove', async member => {
let mkanal = client.channels.get(db.fetch(`yazilihgbb_${member.guild.id}`)) 
 if(member.user.bot === true) return;
mkanal.send(`**${member.user.username}** suncudan ayrıldı, puffff.`);
});
//// YAZILI GIRIS CIKIS SON ////

//// OTOROL BASLANGIC ////

client.on("guildMemberAdd", async member => {
  if (member.user.bot === true) return;
  let rolisim = await db.fetch(`otorolisim_${member.guild.id}`);
  let kanal = db.fetch(`otorolKanal_${member.guild.id}`);
  let rolid = await db.fetch(`otorol_${member.guild.id}`);
  let bilgiKanal = client.channels.get(kanal)
    bilgiKanal.send(`:new: \`${member.user.tag}\` adlı kullanıcıya **${rolisim}** adlı rol verildi.` );
   member.addRole(rolid);
});

//// OTOROL SON ////




client.login(client.ayarlar.token); 