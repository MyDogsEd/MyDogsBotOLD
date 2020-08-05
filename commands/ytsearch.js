const fetch = require('node-fetch')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('../config.js')
module.exports = {
    name: "yts",
    description: "search youtube for a video",
    async execute(message, args, splitArgs){
        if (client.user === null){await client.login(config.token)}
        
        let search = args.substring(args.indexOf('"') + 1, args.lastIndexOf('"'))
        let query = search.replace(" ", "%20")
        let request = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyDbZJh2FD_5eY0VXkuYOOq5NHC32gNdsew`)
        request = await request.json()
        message.reply('```\n' + JSON.stringify(search) + '\n```')
        const searchEmbed = new Discord.MessageEmbed()
            .setAuthor("MyDogsBot - Youtube Search Beta", client.user.avatarURL(), "https://mydogsed.dev")
        message.channel.send(searchEmbed)
    }
}