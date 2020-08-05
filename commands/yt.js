const ytdl = require('ytdl-core')
module.exports = {
    name: 'yt',
    description: 'Plays a file from youtube',
    usage: 'test usage',
    async execute(message, args, splitArgs){
        if (!message.member.voice){message.reply('You must be in a voice channel to do that!'); return}

        const connection = await message.member.voice.channel.join(); 
        message.channel.send(`Now Playing in \`${message.member.voice.channel.name}\``)
        var link = args.substring(args.indexOf('"') + 1, args.lastIndexOf('"'))
        //var volume = parseFloat(splitArgs[1])
        var volume = 0.25
        connection.play(ytdl(link, {filter: "audioonly"}), {volume: volume})
    }
}