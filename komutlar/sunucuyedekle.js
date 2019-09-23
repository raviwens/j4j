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
            return message.channel.send(":x: | HATA");
        }
        // Fetching the backup to know if it exists
        backup.fetch(backupID).then(async () => {
            // If the backup exists, request for confirmation
            message.channel.send(":warning: | Gerekli her şey çekildi, bu işlem geri alınamaz! Kurulumu onaylamak için `onayla` yazınız.");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "onayla"), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    // if the author of the commands does not confirm the backup loading
                    return message.channel.send(emojiler.basarisiz+" Gerekli cevabı vermediğin için kurulum iptal edildi!");
                });
                // When the author of the command has confirmed that he wants to load the backup on his server
                message.author.send(emojiler.onaylı + "`"+backupID+"` ID'li yedek kuruluyor... ");
                // Load the backup
                backup.load(backupID, message.guild).then(() => {
                    // When the backup is loaded, delete them from the server
                    backup.delete(backupID);
                }).catch((err) => {
                    // If an error occurenced
                    return message.author.send(emojiler.basarisiz+" Üzgünüm, hata oluştu.");
                });
        }).catch((err) => {
            // if the backup wasn't found
            return message.channel.send(emojiler.basarisiz+" `"+backupID+"` ID'li yedeği bulamıyorum. ");
        });
  }
  
  if(eylem === "bilgi"){
    let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        // Fetch the backup
        backup.fetch(backupID).then((backupInfos) => {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Backup Informations")
                // Display the backup ID
                .addField("ID", backupInfos.ID, true)
                // Displays the server from which this backup comes
                .addField("Server", backupInfos.server, true)
                // Display the size (in mb) of the backup
                .addField("Size", backupInfos.size, true)
                // Display when the backup was created
                .addField("Created at", timeConverter(backupInfos.createdTimestamp), true)
                .setColor("#FF0000");
            message.channel.send(embed);
        }).catch((err) => {
            // if the backup wasn't found
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
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
