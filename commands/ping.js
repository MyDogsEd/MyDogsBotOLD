const ytdl = require('ytdl-core')

module.exports = {
    name: "ping",
    description: 'le ping',
    async execute(message, args, splitargs){
        if(!message.member.voice){message.reply("You must be in a voice channel to do that!")}

        const connection = await message.member.voice.channel.join()
        message.channel.send('OK')
        connection.play(ytdl("https://www.youtube.com/watch?v=jiWj1zZlRjQ", {filter: "audioonly"}), 0.5)
    }
}