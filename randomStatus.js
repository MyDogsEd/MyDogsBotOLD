const Discord = require('discord.js')
const client = new Discord.Client();

const config = require('./config.js')

const randomStatus = async function(){
    if(client.user === null){await client.login(config.token)}
    
    const statusJSON = require('./randomStatusList.json')
    const randomStatus = statusJSON[Math.floor(Math.random() * 7) + 1]

    client.user.setPresence({
        activity:{
            type: randomStatus[0],
            name: randomStatus[1]
        }
    })
}
exports.randomStatus = randomStatus