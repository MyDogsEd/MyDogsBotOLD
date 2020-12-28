const { execute } = require("./playMyFile");

const ytdl = require('ytdl-core')

module.exports = {
    name: "knock",
    description: 'knock plz',
    async execute(message, args, splitargs){
        if(!message.member.voice){message.reply("You must be in a voice channel to do that!")}

        const connection = await message.member.voice.channel.join()
        message.channel.send('OK')
        connection.play(ytdl("https://www.youtube.com/watch?v=ZqNpXJwgO8o", {filter: "audioonly"}), 1)
    }
}