const Discord = require('discord.js');
const db = require('quick.db');
const emojiler = require('../emojiler.json');
  const backup = require("discord-backup");
exports.run = async (client, message, args) => {
 let eylem = args.slice(0).join(' ')
 if(eylem === "al"){
   if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send(emojiler.basarisiz +"Bu kodu kullanmak için `ADMINISTRATOR` yetkinin olması lazım! ");
        }
         backup.create(message.guild).then((backupID) => {
            message.author.send("Yedeği kurmak için: `!sunucuyedek kur "+backupID+"`");
        });
 }
  if(eylem === "kur"){
     if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.channel.send(emojiler.basarisiz +"Bu kodu kullanmak için `ADMINISTRATOR` yetkinin olması lazım! ");
         }
        let backupID = args[1];
        if(!backupID){
            return message.channel.send(emojiler.basarisiz+" Doğru bir yedek ID girmelisiniz!");
        }
        backup.fetch(backupID).then(async () => {
            message.channel.send(":warning: | Gerekli her şey çekildi, bu işlem geri alınamaz! Kurulumu onaylamak için `onayla` yazınız.");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "onayla"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.channel.send(emojiler.basarisiz+" Gerekli cevabı vermediğin için kurulum iptal edildi!");
                });
                message.author.send(emojiler.onaylı + "`"+backupID+"` ID'li yedek kuruluyor... ");
                backup.load(backupID, message.guild).then(() => {
                    backup.delete(backupID);
                }).catch((err) => {
                    return message.author.send(emojiler.basarisiz+" Üzgünüm, hata oluştu.");
                });
        }).catch((err) => {
            return message.channel.send(emojiler.basarisiz+" `"+backupID+"` ID'li yedeği bulamıyorum. ");
        });
  }
  
  if(eylem === "bilgi"){
    let backupID = args[1];
        if(!backupID){
            return message.channel.send(":x: | !");
        }
        backup.fetch(backupID).then((backupInfos) => {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Yedek Bilgileri")
                
                .addField("Yedek ID", backupInfos.ID, true)
                .addField("Server", backupInfos.server, true)
                .addField("Size", backupInfos.size, true)
                .addField("Created at", (backupInfos.createdTimestamp), true)
                .setColor("#FF0000");
            message.channel.send(embed);
        }).catch((err) => {
           return message.channel.send(emojiler.basarisiz+" `"+backupID+"` ID'li yedeği bulamıyorum. ");
        });
    }
 
}

  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucuyedek',
  description: '',
  usage: ''
};
