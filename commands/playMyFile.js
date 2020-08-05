module.exports = {
    name: 'file',
    description: 'Plays a file from MyDogsEd\'s PC',
    async execute(message, args, splitArgs){
        if (!message.member.voice){message.reply('You must be in a voice channel to do that!'); return}
        //if (message.member.voice.channel.full || message.member.voice.channel.joinable || message.member.voice.channel.speakable){message.reply('There is a problem with this channel: Either it\'s full, it\'s not joinable, or I can\'t speak in it.'); return}

        const connection = await message.member.voice.channel.join(); 
        message.channel.send(`Now Playing in \`${message.member.voice.channel.name}\``)
        var path = args.substring(args.indexOf('"') + 1, args.lastIndexOf('"'))
        var volume = parseFloat(splitArgs[1])
        connection.play(path, {volume: volume}).catch(console.error(error))
    }
}