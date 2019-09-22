const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyBV1uhslzbeB7P0n4H3INs8U3xF3vs2Wtk");

exports.run = async (client, message, args) => {
  let müzik = args.slice(0).join(' ')
  if(müzik.includes
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
    
  };
  
  exports.help = {
    name: 'ara',
    description: '',
    usage: 'ara',
  };  