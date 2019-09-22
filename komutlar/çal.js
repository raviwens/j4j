const YouTube = require('simple-youtube-api');
const youtube = new YouTube('  Y  o  u  r     A  p  i     K  e  y  ');

exports.run = async (client, message, args) => {
  let müzik = args.slice(0).join(' ')
  
youtube.searchVideos(müzik, 4)
    .then(results => {
        message.reply(`${results[0].title}`);
    })
    .catch(console.log);
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: '',
    usage: 'ayarlar',
  };  