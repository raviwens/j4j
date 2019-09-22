const db = require("quick.db")
const Discord = require('discord.js');

module.exports = async (member,client,request) => { 
  let rkanal = db.fetch(`resimlihgbb_${member.guild.id}`)
  if(member.user.bot === true) return;
  const Canvas= require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');

  const canvas = Canvas.createCanvas(360, 250)

  const ctx = canvas.getContext('2d');
 
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/623947123473514496/623947203144056842/sunucuyakatildi.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = `#BAF79C`;
	
	ctx.textAlign = "center";
  var kontrol;
 if(member.user.username.length < 14) kontrol =ctx.font = `33px "Sans Serif"`;
  if(member.user.username.length > 14) kontrol= ctx.font = `18px "Sans Serif"`;
   ctx.fillText(`${member.user.username.toUpperCase()}`, 180, 210);
ctx.fillStyle = `#12fccd`;
 ctx.font = `16px "Sans Serif"`;
   ctx.fillText(`${client.user.username}`, 78, 235);
 
  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
	const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
	ctx.arc(112 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
	ctx.clip();
	  ctx.drawImage(avatar, 112, 55, 110, 110);
  
  const dosya= new Discord.Attachment(canvas.toBuffer(), 'SERVER-GUARD.png');
  member.guild.channels.get(rkanal).send(dosya)
  
}