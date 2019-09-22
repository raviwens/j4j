const ytdl    = require('ytdl-core');
//const youtube = new YouTube("AIzaSyBV1uhslzbeB7P0n4H3INs8U3xF3vs2Wtk");

exports.run = async (client, message, args) => {
  let müzik = args.slice(0).join(' ')
  console.log('Güzel');
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply('Please be in a voice channel first!');
    }
    voiceChannel.join()
      .then(connection => {
        const stream = ytdl(müzik, { filter: 'audioonly' });
        const dispatcher = connection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
}


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